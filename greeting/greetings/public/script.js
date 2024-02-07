function displayGreeting() {
    var nameInput = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');

    if (nameInput.trim() !== '') {
        greetingMessage.innerHTML = 'Hello, ' + nameInput + ' Greetings for the day :) !!!';
    } else {
        greetingMessage.innerHTML = 'Please enter your name.';
    }
}
