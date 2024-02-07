function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseInt(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0) {
        alert("Please enter valid values for the bill amount and tip percentage.");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
}
