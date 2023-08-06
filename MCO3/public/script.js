function login() {
  // Retrieve input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform authentication logic (you can customize this part)
  if (username === 'admin' && password === 'password') {
    // Authentication successful
    // Hide login form and show logout button
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('logoutButton').style.display = 'block';

    // Optionally, perform additional actions after login

    console.log('User logged in');
  } else {
    // Authentication failed
    alert('Invalid credentials');
  }
}

function logout() {
  // Display login form and hide logout button
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('logoutButton').style.display = 'none';

  // Optionally, perform additional actions after logout

  console.log('User logged out');
}
