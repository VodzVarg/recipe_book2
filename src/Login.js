import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login({ onLoginSuccess }) {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get dispatch function
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find matching user
    const user = users.find(
      user => user.username === username && user.password === password
    );

    // If user found, update Redux state and store user info
    if (user) {
      // dispatch(loginAction(user)); // Assuming you have a login action in Redux
      navigate('/'); // Redirect to home page (or any other page)
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="content">
      <h1>Login</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;