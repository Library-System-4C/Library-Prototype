import React, { useState } from 'react';
import './style.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Here, you can add your registration logic.
    // For demonstration purposes, let's just check if the fields are filled.

    if (username && email && password) {
      alert('Registration successful!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="register-form p-4">
        <h2 className="mb-4">Register</h2>
        <form onSubmit={handleRegister}>
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
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <a href="/" class="btn btn-primary">Register </a>
        </form>
      </div>
    </div>
  );
}
 
export default Register;