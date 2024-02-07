function calculateInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(time)) {
        document.getElementById('result').innerHTML = 'Please enter valid numerical values for all fields.';
    } else if (principal <= 0 || interestRate <= 0 || time <= 0) {
        document.getElementById('result').innerHTML = 'Please enter positive values for all fields.';
    } else {
        var simpleInterest = (principal * interestRate * time) / 100;
        var totalAmount = principal + simpleInterest;

        document.getElementById('result').innerHTML = 'Simple Interest: ' + simpleInterest.toFixed(2) + '<br>Total Amount: ' + totalAmount.toFixed(2);
    }
}
