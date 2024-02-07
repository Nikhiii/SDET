// function calculateEMI() {
//     var loanAmount = parseFloat(document.getElementById('loanAmount').value);
//     var interestRate = parseFloat(document.getElementById('interestRate').value);
//     var loanTerm = parseFloat(document.getElementById('loanTerm').value);
  
//     if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
//       document.getElementById('result').innerHTML = 'Please enter valid values.';
//       return;
//     }
  
//     var monthlyInterestRate = interestRate / 100 / 12;
//     var emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) / (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
  
//     document.getElementById('result').innerHTML = 'EMI: $' + emi.toFixed(2);
//   }
  
function calculateEMI() {
  var loanAmount = parseFloat(document.getElementById('loanAmount').value);
  var interestRate = parseFloat(document.getElementById('interestRate').value);
  var loanTerm = parseFloat(document.getElementById('loanTerm').value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    document.getElementById('result').innerHTML = 'Please enter valid values.';
    document.getElementById('result').style.color = 'black';
    return;
  }

  var monthlyInterestRate = interestRate / 100 / 12;
  var emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) / (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);

  document.getElementById('result').innerHTML = 'EMI: $' + emi.toFixed(2);
  
  if (emi <= 1000) {
    document.getElementById('result').style.color = 'green';
  } else {
    document.getElementById('result').style.color = 'red';
  }
}
