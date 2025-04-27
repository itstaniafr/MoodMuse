function getStarted() {
  window.location.href = "quiz.html";
}

// Subscribe Form
document.addEventListener('DOMContentLoaded', function() {
  const subscribeForm = document.getElementById('subscribe-form');
  const subscribeMessage = document.getElementById('subscribe-message');

  subscribeForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const emailInput = document.getElementById('email').value.trim();

    if (emailInput !== "") {
      subscribeMessage.textContent = "Thank you for subscribing!";
      subscribeMessage.style.color = '#4a148c'; // Correct hex color
      subscribeForm.reset(); // Clear the input field
    } else {
      subscribeMessage.textContent = "Please enter a valid email address.";
      subscribeMessage.style.color = 'red';
    }
  });
});

// Check login status
const isLoggedIn = localStorage.getItem('isLoggedIn');

// Find the nav item
const navAction = document.getElementById('nav-action');

// If user is logged in, show 'Profile' instead of 'Signup'
if (isLoggedIn === 'true') {
  navAction.innerHTML = '<a href="profile.html">Profile</a>';
}