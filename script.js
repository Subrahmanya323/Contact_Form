document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  // Name validation
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    valid = false;
  }

  // Message validation
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    valid = false;
  }

  // Final success
  if (valid) {
    document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    document.getElementById('contactForm').reset();
  }
});
