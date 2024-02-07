// function calculateBMI() {
//     var weight = parseFloat(document.getElementById('weight').value);
//     var height = parseFloat(document.getElementById('height').value);
  
//     if (isNaN(weight) || isNaN(height)) {
//       document.getElementById('result').innerHTML = 'Please enter valid values.';
//       return;
//     }
  
//     // Convert height from cm to meters
//     var heightInMeters = height / 100;
  
//     // Calculate BMI
//     var bmi = weight / (heightInMeters * heightInMeters);
  
//     document.getElementById('result').innerHTML = 'BMI: ' + bmi.toFixed(2);
//   }
  
function calculateBMI() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height)) {
    document.getElementById('result').innerHTML = 'Please enter valid values.';
    document.getElementById('result').style.color = 'black';
    return;
  }

  // Convert height from cm to meters
  var heightInMeters = height / 100;

  // Calculate BMI
  var bmi = weight / (heightInMeters * heightInMeters);

  // Determine weight status based on BMI
  var weightStatus;
  var color;

  if (bmi < 18.5) {
    weightStatus = 'Underweight';
    color = 'red';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = 'Healthy Weight';
    color = 'green';
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    weightStatus = 'Overweight';
    color = 'red';
  } else {
    weightStatus = 'Obesity';
    color = 'red';
  }

  document.getElementById('result').innerHTML = 'BMI: ' + bmi.toFixed(2);
  document.getElementById('result').style.color = color;
  document.getElementById('weightStatus').innerHTML = 'Weight Status: ' + weightStatus;
  document.getElementById('weightStatus').style.color = color;
}
