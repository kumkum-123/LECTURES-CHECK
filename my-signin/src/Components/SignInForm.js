import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // Import necessary icons
import { FaChalkboardTeacher } from 'react-icons/fa'; // Import FaChalkboardTeacher icon
import './SignInForm.css';

const SignInForm = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Simulate authentication process
    if (username === 'admin' && password === 'password') {
      onSignIn();
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="sign-in-wrapper">
      <h1 className="app-name">
        <span className="lectures-text">
          <FaChalkboardTeacher className="app-icon" />
          LECTURES CHECK
        </span>
      </h1>
      <div className="form-container">
        <form onSubmit={handleSignIn}>
          <div className="input-container">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;









