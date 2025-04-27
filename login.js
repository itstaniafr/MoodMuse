document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
  
    // Validate empty fields
    if (!email || !password) {
      errorMessage.textContent = "Please fill in all fields.";
      errorMessage.style.display = "block";
      return;
    }
  
    // Dummy login credentials
    const validCredentials = [
      { email: "taniasathwara552@gmail.com", password: "tanuman:123" },
      { email: "ananyasaddi@gamil.com", password: "Asaddi" },
      { email: "xraizelx2504@gmail.com", password: "raizel$123" },
      { email: "navyamehtaa@gmail.com", password: "abc123" }
    ];
  
    const isValidUser = validCredentials.some(
      cred => cred.email === email && cred.password === password
    );
  
    if (isValidUser) {
      errorMessage.style.display = "none";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      errorMessage.textContent = "Invalid email or password.";
      errorMessage.style.display = "block";
    }
  });
  