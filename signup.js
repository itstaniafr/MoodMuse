document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const message = document.getElementById("message");

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // Simulate a sign-up process (e.g., send to server)
  message.style.color = "green";
  message.textContent = "Account created successfully! Redirecting to login...";

  // Redirect to login page after 2 seconds
  setTimeout(() => {
    document.getElementById("signup-form").reset();
    message.textContent = "";
    window.location.href = "login.html";
  }, 2000);
});