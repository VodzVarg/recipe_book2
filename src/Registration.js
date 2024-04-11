import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Create a navigate instance

  const handleSubmit = (event) => {
    event.preventDefault();

    // ... (validation logic remains the same)

    // Create user object
    const newUser = { username, email, password };

    // ... (localStorage logic remains the same)

    // Redirect to login page after registration
    navigate('/login');
  };

  return (
    <div className="content">
      <h1>Registration</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text" // Changed to type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Added onChange handler
          />
        </label>
        <label>
          Электронная почта:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Added onChange handler
          />
        </label>
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Added onChange handler
          />
        </label>
        <label>
          Подтвердите пароль:
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Added onChange handler
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;