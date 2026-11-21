const checkoutBtn = document.getElementById("checkoutBtn");
const customerName = document.getElementById("customerName");
const customerMoney = document.getElementById("customerMoney");
const productTableBody = document.getElementById("productTableBody");
const availableMoney = document.getElementById("availableMoney");
const remainingBalance = document.getElementById("remainingBalance");
const summaryTotal = document.getElementById("summaryTotal");
const shopCatalogueTable = document.getElementById("shopCatalogueTable");

let globalTotalGrandPrice = 0;
let globalCartItems = [];

const globalItems = [
    { name: 'Mechanical Keyboard', price: 2500 },
    { name: 'Gaming Mouse', price: 1200 },
    { name: 'Mousepad', price: 300 },
    { name: 'Headset', price: 1800 },
    { name: 'USB Hub', price: 500 }
];

function updateFinances() {
    const money = parseFloat(customerMoney.value) || 0;

    availableMoney.textContent = `₱${money.toFixed(2)}`;
    summaryTotal.textContent = `₱${globalTotalGrandPrice.toFixed(2)}`;

    const balance = money - globalTotalGrandPrice;
    remainingBalance.textContent = `₱${balance >= 0 ? balance.toFixed(2) : '0.00'}`;

    validateCheckout(money);
}

function validateCheckout(money) {
    const hasName = customerName.value.trim().length > 0;
    const hasMoney = customerMoney.value.trim().length > 0;
    const hasItems = globalCartItems.length > 0;
    const canAfford = money >= globalTotalGrandPrice;

    checkoutBtn.disabled = !(hasName && hasMoney && hasItems && canAfford);
}

function addToCart(item, qty) {
    const quantity = parseInt(qty);
    if (isNaN(quantity) || quantity <= 0) return;

    const existingItem = globalCartItems.find(cItem => cItem.name === item.name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        globalCartItems.push({ name: item.name, quantity, price: item.price });
    }

    renderCart();
}

function renderCatalogue() {
    shopCatalogueTable.innerHTML = "";

    globalItems.forEach((item, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td class="text-start fw-semibold">${item.name}</td>
            <td>₱${item.price.toFixed(2)}</td>
            <td>
                <div class="input-group input-group-sm mx-auto" style="max-width: 110px;">
                    <button class="btn btn-outline-secondary minus-btn" type="button"><i class="bi bi-dash"></i></button>
                    <input type="number" class="form-control text-center qty-input" value="1" min="1">
                    <button class="btn btn-outline-secondary plus-btn" type="button"><i class="bi bi-plus"></i></button>
                </div>
            </td>
            <td>
                <button class="btn btn-sm btn-success add-btn"><i class="bi bi-cart-plus"></i> Add</button>
            </td>
        `;

        const minusBtn = tr.querySelector('.minus-btn');
        const plusBtn = tr.querySelector('.plus-btn');
        const qtyInput = tr.querySelector('.qty-input');
        const addBtn = tr.querySelector('.add-btn');

        minusBtn.addEventListener("click", () => {
            const val = parseInt(qtyInput.value) || 1;
            if (val > 1) qtyInput.value = val - 1;
        });

        plusBtn.addEventListener("click", () => {
            const val = parseInt(qtyInput.value) || 0;
            qtyInput.value = val + 1;
        });

        addBtn.addEventListener("click", () => {
            addToCart(item, qtyInput.value);
        });

        shopCatalogueTable.appendChild(tr);
    });
}

function renderCart() {
    productTableBody.innerHTML = "";
    globalTotalGrandPrice = 0;

    globalCartItems.forEach((item, index) => {
        const subtotal = item.quantity * item.price;
        globalTotalGrandPrice += subtotal;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td class="text-start">${item.name}</td>
            <td>${item.quantity}</td>
            <td>₱${item.price.toFixed(2)}</td>
            <td class="fw-semibold">₱${subtotal.toFixed(2)}</td>
        `;
        productTableBody.appendChild(tr);
    });

    updateFinances();
}

function processCheckout() {
    const money = parseFloat(customerMoney.value) || 0;
    const balance = money - globalTotalGrandPrice;

    let receipt = `🛒 SUCCESSFUL PURCHASE!\n`;
    receipt += `----------------------------------------\n`;
    receipt += `Customer: ${customerName.value.trim()}\n`;
    receipt += `Date: ${new Date().toLocaleString()}\n`;
    receipt += `----------------------------------------\n`;

    globalCartItems.forEach(item => {
        receipt += `${item.name} (x${item.quantity}) - ₱${(item.price * item.quantity).toFixed(2)}\n`;
    });

    receipt += `----------------------------------------\n`;
    receipt += `Total Amount: ₱${globalTotalGrandPrice.toFixed(2)}\n`;
    receipt += `Cash Tendered: ₱${money.toFixed(2)}\n`;
    receipt += `Change: ₱${balance.toFixed(2)}\n`;
    receipt += `----------------------------------------\n`;
    receipt += `Thank you for shopping!`;

    alert(receipt);

    globalCartItems = [];
    customerName.value = "";
    customerMoney.value = "";
    renderCart();
}

customerName.addEventListener("input", updateFinances);
customerMoney.addEventListener("input", updateFinances);
checkoutBtn.addEventListener("click", processCheckout);

renderCatalogue();
updateFinances();
