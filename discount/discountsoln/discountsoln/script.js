// function applyDiscount() {
//     var amountInput = document.getElementById("amountInput");
//     var totalAmount = parseFloat(amountInput.value);
  
//     if (!isNaN(totalAmount)) {
//         var discountedAmount = totalAmount - (totalAmount * 0.05); // Apply 5% discount
//         document.getElementById("discountedAmount").textContent = "Discounted Amount: $" + discountedAmount.toFixed(2);
//     } else {
//         document.getElementById("discountedAmount").textContent = "Invalid input. Please enter a valid amount.";
//     }
// }

// document.getElementById("applyButton").addEventListener("click", applyDiscount);

function applyDiscount() {
    var amountInput = document.getElementById("amountInput");
    var totalAmount = parseFloat(amountInput.value);

    if (!isNaN(totalAmount)) {
        var discountedAmount = 0;

        if (totalAmount >= 1000 && totalAmount <= 5000) {
            discountedAmount = totalAmount - (totalAmount * 0.05); // Apply 5% discount
            document.getElementById("discountedAmount").style.color = "black";
        } else if (totalAmount >= 5001 && totalAmount <= 7500) {
            discountedAmount = totalAmount - (totalAmount * 0.10); // Apply 10% discount
            document.getElementById("discountedAmount").style.color = "green";
        } else if (totalAmount > 7500) {
            discountedAmount = totalAmount - (totalAmount * 0.15); // Apply 15% discount
            document.getElementById("discountedAmount").style.color = "green";
            document.getElementById("discountedAmount").style.fontWeight = "bold";
        } else {
            // No discount applied
            document.getElementById("discountedAmount").style.color = "black";
        }

        document.getElementById("discountedAmount").textContent = "Discounted Amount: $" + discountedAmount.toFixed(2);
    } else {
        document.getElementById("discountedAmount").textContent = "Invalid input. Please enter a valid amount.";
    }
}

document.getElementById("applyButton").addEventListener("click", applyDiscount);
