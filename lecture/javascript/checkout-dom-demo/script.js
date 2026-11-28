
// ===================================
// 1. PRODUCT DATA
// ===================================

const products = [
    { id: 1, name: "T-Shirt", price: 250, quantity: 0 },
    { id: 2, name: "Jeans", price: 400, quantity: 0 },
    { id: 3, name: "Cap", price: 150, quantity: 0 },
    { id: 4, name: "Shoes", price: 800, quantity: 0 },
    { id: 5, name: "Bag", price: 500, quantity: 0 },
    { id: 6, name: "Watch", price: 350, quantity: 0 }
];

// ===================================
// 2. SELECT HTML ELEMENTS
// ===================================

const productList = document.getElementById("productList");
const customerName = document.getElementById("customerName");
const customerCredit = document.getElementById("customerCredit");

const orderSummary = document.getElementById("orderSummary");
const availableMoney = document.getElementById("availableMoney");
const totalAmount = document.getElementById("totalAmount");
const balance = document.getElementById("balance");

const checkoutBtn = document.getElementById("checkoutBtn");
const validationMessage = document.getElementById("validationMessage");

const receipt = document.getElementById("receipt");
const receiptDetails = document.getElementById("receiptDetails");

const peso = amount => "₱" + amount.toFixed(2);

// ===================================
// 3. DISPLAY PRODUCTS
// ===================================

function displayProducts() {

    productList.innerHTML = "";

    products.forEach(product => {

        productList.innerHTML += `
            <div class="product-card">

                <h3>${product.name}</h3>

                <p>Price: ${peso(product.price)}</p>

                <button onclick="changeQuantity(${product.id}, -1)">
                    -
                </button>

                <span class="quantity">
                    ${product.quantity}
                </span>

                <button onclick="changeQuantity(${product.id}, 1)">
                    +
                </button>

            </div>
        `;

    });

}

// ===================================
// 4. CHANGE PRODUCT QUANTITY
// ===================================

function changeQuantity(id, amount) {

    const product = products.find(item => item.id === id);

    if (product.quantity + amount >= 0) {
        product.quantity += amount;
    }

    displayProducts();
    updateSummary();

}

// ===================================
// 5. CALCULATE TOTAL
// ===================================

function calculateTotal() {

    let total = 0;

    products.forEach(product => {
        total += product.price * product.quantity;
    });

    return total;

}

// ===================================
// 6. UPDATE ORDER SUMMARY
// ===================================

function updateSummary() {

    const selectedProducts = products.filter(
        product => product.quantity > 0
    );

    const total = calculateTotal();

    const credit = Number(customerCredit.value) || 0;

    const remainingBalance = credit - total;

    availableMoney.textContent = peso(credit);
    totalAmount.textContent = peso(total);
    balance.textContent = peso(remainingBalance);

    if (selectedProducts.length === 0) {

        orderSummary.innerHTML = "<p>No items selected.</p>";

    } else {

        orderSummary.innerHTML = selectedProducts.map(product => `
            <p>
                ${product.name} x ${product.quantity}
                = ${peso(product.price * product.quantity)}
            </p>
        `).join("");

    }

    // ===================================
    // 7. CHECKOUT VALIDATION
    // ===================================

    const hasName = customerName.value.trim() !== "";
    const hasProducts = selectedProducts.length > 0;
    const hasCredit = customerCredit.value.trim() !== "";
    const validCredit = hasCredit && Number.isFinite(credit) && credit >= 0;

    const enoughMoney = validCredit && credit >= total;

    checkoutBtn.disabled = !(
        hasName &&
        hasProducts &&
        enoughMoney
    );

    if (!hasName) {
        validationMessage.textContent =
            "Please enter your name.";

    } else if (!hasCredit || !validCredit) {
        validationMessage.textContent =
            "Please enter a valid amount of money.";

    } else if (!hasProducts) {
        validationMessage.textContent =
            "Please select at least one product.";

    } else if (!enoughMoney) {
        validationMessage.textContent =
            "Insufficient money! Please add more credit.";

    } else {
        validationMessage.textContent =
            "You are ready to checkout!";
    }

}

// ===================================
// 8. CUSTOMER INPUT EVENTS
// ===================================

customerName.addEventListener("input", updateSummary);

customerCredit.addEventListener("input", updateSummary);

// ===================================
// 9. PROCEED TO CHECKOUT
// ===================================

checkoutBtn.addEventListener("click", function() {

    // Revalidate before processing
    updateSummary();

    if (checkoutBtn.disabled) {
        return;
    }

    const name = customerName.value.trim();
    const total = calculateTotal();
    const credit = Number(customerCredit.value);
    const remainingBalance = credit - total;

    const purchasedProducts = products.filter(
        product => product.quantity > 0
    );

    // Get current date and time
    const purchaseDate = new Date().toLocaleString();

    // Create receipt details
    let purchasedItems = purchasedProducts.map(product => `
        <p>
            ${product.name} x ${product.quantity}
            - ${peso(product.price * product.quantity)}
        </p>
    `).join("");

    receiptDetails.innerHTML = `
        <p><strong>Customer:</strong> ${escapeHTML(name)}</p>
        <p><strong>Date:</strong> ${purchaseDate}</p>

        <hr>

        <h3>Purchased Items</h3>

        ${purchasedItems}

        <hr>

        <p><strong>Total:</strong> ${peso(total)}</p>
        <p><strong>Money Paid:</strong> ${peso(total)}</p>
        <p><strong>Remaining Balance:</strong>
            ${peso(remainingBalance)}
        </p>

        <h3>Thank you for your purchase!</h3>
    `;

    // Display receipt
    receipt.hidden = false;

    // Show successful checkout alert
    alert(
        "PURCHASE SUCCESSFUL!\n\n" +
        "Customer: " + name + "\n" +
        "Total Amount: " + peso(total) + "\n" +
        "Remaining Balance: " + peso(remainingBalance) + "\n" +
        "Date: " + purchaseDate
    );

    // Reset products and customer inputs
    products.forEach(product => {
        product.quantity = 0;
    });

    customerName.value = "";
    customerCredit.value = "";

    displayProducts();
    updateSummary();

    // Show receipt after checkout
    receipt.scrollIntoView({ behavior: "smooth" });

});

// Escape customer input before inserting it into HTML
function escapeHTML(value) {
    return value.replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}

// ===================================
// 10. INITIALIZE SYSTEM
// ===================================

displayProducts();
updateSummary();
