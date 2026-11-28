
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

$(function() {
    const $productList = $("#productList");
    const $customerName = $("#customerName");
    const $customerCredit = $("#customerCredit");
    const $orderSummary = $("#orderSummary");
    const $availableMoney = $("#availableMoney");
    const $totalAmount = $("#totalAmount");
    const $balance = $("#balance");
    const $checkoutBtn = $("#checkoutBtn");
    const $validationMessage = $("#validationMessage");
    const $receipt = $("#receipt");
    const $receiptDetails = $("#receiptDetails");

    const peso = amount => "₱" + amount.toFixed(2);

// ===================================
// 3. DISPLAY PRODUCTS
// ===================================

function displayProducts() {

    $productList.empty();

    products.forEach(product => {

        $productList.append(`
            <div class="product-card">

                <h3>${product.name}</h3>

                <p>Price: ${peso(product.price)}</p>

                <button type="button" class="quantity-btn"
                        data-product-id="${product.id}" data-amount="-1"
                        aria-label="Decrease ${product.name} quantity">
                    -
                </button>

                <span class="quantity">
                    ${product.quantity}
                </span>

                <button type="button" class="quantity-btn"
                        data-product-id="${product.id}" data-amount="1"
                        aria-label="Increase ${product.name} quantity">
                    +
                </button>

            </div>
        `);

    });

}

// ===================================
// 4. CHANGE PRODUCT QUANTITY
// ===================================

function changeQuantity(id, amount) {

    const product = products.find(item => item.id === id);

    if (product && product.quantity + amount >= 0) {
        product.quantity += amount;
    }

    displayProducts();
    updateSummary();

}

$productList.on("click", ".quantity-btn", function() {
    changeQuantity(
        Number($(this).attr("data-product-id")),
        Number($(this).attr("data-amount"))
    );
});

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

    const creditInput = String($customerCredit.val()).trim();
    const credit = Number(creditInput) || 0;

    const remainingBalance = credit - total;

    $availableMoney.text(peso(credit));
    $totalAmount.text(peso(total));
    $balance.text(peso(remainingBalance));

    $orderSummary.empty();
    if (selectedProducts.length === 0) {
        $orderSummary.append($("<p>").text("No items selected."));
    } else {
        selectedProducts.forEach(product => {
            $orderSummary.append(
                $("<p>").text(
                    `${product.name} x ${product.quantity} = ` +
                    peso(product.price * product.quantity)
                )
            );
        });
    }

    // ===================================
    // 7. CHECKOUT VALIDATION
    // ===================================

    const hasName = String($customerName.val()).trim() !== "";
    const hasProducts = selectedProducts.length > 0;
    const hasCredit = creditInput !== "";
    const validCredit = hasCredit &&
        Number.isFinite(Number(creditInput)) &&
        Number(creditInput) >= 0;

    const enoughMoney = validCredit && credit >= total;

    $checkoutBtn.prop("disabled", !(
        hasName &&
        hasProducts &&
        enoughMoney
    ));

    if (!hasName) {
        $validationMessage.text("Please enter your name.");

    } else if (!hasCredit || !validCredit) {
        $validationMessage.text("Please enter a valid amount of money.");

    } else if (!hasProducts) {
        $validationMessage.text("Please select at least one product.");

    } else if (!enoughMoney) {
        $validationMessage.text(
            "Insufficient money! Please add more credit."
        );

    } else {
        $validationMessage.text("You are ready to checkout!");
    }

}

// ===================================
// 8. CUSTOMER INPUT EVENTS
// ===================================

$customerName.on("input", updateSummary);

$customerCredit.on("input", updateSummary);

// ===================================
// 9. PROCEED TO CHECKOUT
// ===================================

$checkoutBtn.on("click", function() {

    // Revalidate before processing
    updateSummary();

    if ($checkoutBtn.prop("disabled")) {
        return;
    }

    const name = String($customerName.val()).trim();
    const total = calculateTotal();
    const credit = Number($customerCredit.val());
    const remainingBalance = credit - total;

    const purchasedProducts = products.filter(
        product => product.quantity > 0
    );

    // Get current date and time
    const purchaseDate = new Date().toLocaleString();

    $receiptDetails.empty().append(
        $("<p>").append(
            $("<strong>").text("Customer: "),
            $("<span>").text(name)
        ),
        $("<p>").append(
            $("<strong>").text("Date: "),
            $("<span>").text(purchaseDate)
        ),
        $("<hr>"),
        $("<h3>").text("Purchased Items")
    );

    purchasedProducts.forEach(product => {
        $receiptDetails.append(
            $("<p>").text(
                `${product.name} x ${product.quantity} - ` +
                peso(product.price * product.quantity)
            )
        );
    });

    $receiptDetails.append(
        $("<hr>"),
        $("<p>").append(
            $("<strong>").text("Total: "),
            $("<span>").text(peso(total))
        ),
        $("<p>").append(
            $("<strong>").text("Money Paid: "),
            $("<span>").text(peso(total))
        ),
        $("<p>").append(
            $("<strong>").text("Remaining Balance: "),
            $("<span>").text(peso(remainingBalance))
        ),
        $("<h3>").text("Thank you for your purchase!")
    );

    // Display receipt
    $receipt.prop("hidden", false);

    // Show successful checkout alert
    window.alert(
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

    $customerName.val("");
    $customerCredit.val("");

    displayProducts();
    updateSummary();

    // Show receipt after checkout
    $receipt.get(0)
    .fadein()
    .scrollIntoView({ behavior: "smooth" });

});

    $("#printReceiptBtn").on("click", function() {
        window.print();
    });

// ===================================
// 10. INITIALIZE SYSTEM
// ===================================

displayProducts();
updateSummary();
});
