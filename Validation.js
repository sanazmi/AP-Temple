// Registration form validation
const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!isValidUsername(username)) {
    displayErrorMessage('Invalid username');
    return;
  }

  if (!isValidPassword(password)) {
    displayErrorMessage('Invalid password');
    return;
  }

  // Registration successful, perform further actions
  // For example, submit the form or redirect to another page
});

// Student profile form validation
const profileForm = document.getElementById('profileForm');
profileForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;

  if (!isValidFullName(fullName)) {
    displayErrorMessage('Invalid full name');
    return;
  }

  if (!isValidEmail(email)) {
    displayErrorMessage('Invalid email');
    return;
  }

  // Profile save successful, perform further actions
  // For example, submit the form or update the profile
});

// Validate username: Allow only letters and numbers, minimum 4 characters
function isValidUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9]{4,}$/;
  return usernameRegex.test(username);
}

// Validate password: Minimum 6 characters
function isValidPassword(password) {
  return password.length >= 6;
}

// Validate full name: Allow only letters and spaces
function isValidFullName(fullName) {
  const fullNameRegex = /^[a-zA-Z\s]+$/;
  return fullNameRegex.test(fullName);
}

// Validate email address using a simple regex
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Display error message below the form
function displayErrorMessage(message) {
  const errorMessage = document.createElement('p');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;

  const form = document.querySelector('form');
  form.parentNode.insertBefore(errorMessage, form.nextSibling);
}
