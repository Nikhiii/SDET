// function calculateAge() {
//     var birthDate = new Date(document.getElementById('birthDate').value);
//     var today = new Date();
  
//     if (isNaN(birthDate)) {
//       document.getElementById('result').innerHTML = 'Please enter a valid date.';
//       return;
//     }
  
//     var age = today.getFullYear() - birthDate.getFullYear();
  
//     // Check if birthday hasn't occurred yet this year
//     if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
  
//     document.getElementById('result').innerHTML = 'Age: ' + age;
//   }
  
function calculateAge() {
  var birthDate = new Date(document.getElementById('birthDate').value);
  var today = new Date();

  if (isNaN(birthDate)) {
    document.getElementById('result').innerHTML = 'Please enter a valid date.';
    return;
  }

  var age = today.getFullYear() - birthDate.getFullYear();

  // Check if birthday hasn't occurred yet this year
  if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
    age--;
  }

  var resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Age: ' + age;

  // Check eligibility to vote
  if (age >= 18) {
    resultElement.style.color = 'green';
    resultElement.innerHTML += ' (Eligible Voter)';
  } else {
    resultElement.style.color = 'red';
    resultElement.innerHTML += ' (Not Eligible to Vote)';
  }
}
