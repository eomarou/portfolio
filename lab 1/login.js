document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder for login logic
    document.getElementById('login-result').innerText = `Welcome, ${username}!`;
});