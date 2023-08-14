
import React, { useState } from 'react';
import "./style.css"
const Login = () => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = (e) => {
  e.preventDefault();
  

  // Here, you can add your authentication logic.
  // For demonstration purposes, let's just check if the fields are filled.

  if (username && password) {
    alert('Login successful!');
  } else {
    alert('Please fill in both fields.');
  }
};

return (
  <div className="container-xl vh-100 d-flex justify-content-center align-items-center ">

    <div className="login-form p-3">
      <h2 className="mb-3">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <a href="/" class="btn btn-primary">Login </a>
        
      </form>
    </div>
  </div>

);
}
 
export default Login;