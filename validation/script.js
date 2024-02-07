function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
      document.getElementById('result').innerHTML = 'Please enter both username and password.';
      return;
    }
  
    var lowercaseRegex = /^(?=.*[a-z])/;
    var uppercaseRegex = /^(?=.*[A-Z])/;
    var digitRegex = /^(?=.*\d)/;
    var specialCharRegex = /^(?=.*[@$!%*?&])/;
  
    var isLowercase = lowercaseRegex.test(password);
    var isUppercase = uppercaseRegex.test(password);
    var hasDigit = digitRegex.test(password);
    var hasSpecialChar = specialCharRegex.test(password);
  
    if (isLowercase && isUppercase && hasDigit && hasSpecialChar) {
      document.getElementById('result').innerHTML = 'Login successful.';
    } else {
      document.getElementById('result').innerHTML = 'Invalid username or password.';
    }
  }
  