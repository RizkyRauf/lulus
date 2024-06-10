document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Redirect to success page with query parameters
    window.location.href = `success.html?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
});
