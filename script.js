function toggleForm() {
    const signupForm = document.getElementById('loginForm');
    const loginForm = document.getElementById('loginForm');
    if (signupForm.style.display === 'none') {
      signupForm.style.display = 'block';
      loginForm.style.display = 'none';
    } else {
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
    }
  }
  document.getElementById('logimForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Login Data:', { name, email, password });
    alert('Login Form Successful! Check console for data.');
    document.getElementById('loginForm').reset();
    toggleForm();
  });


 