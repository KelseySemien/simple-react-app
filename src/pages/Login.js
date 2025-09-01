import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import validatePhone from '../utils/validatePhone';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!phone) {
      setError('Phone number is required.');
      return;
    }
    if (!validatePhone(phone)) {
      setError('Phone must start with +254 and have 9 digits after the country code (e.g., +254712345678).');
      return;
    }
    const res = login(phone);
    if (res.success) {
      navigate('/', { replace: true });
    } else {
      setError(res.message || 'Login failed (mock).');
    }
  };

  return (
    <div className="page login-page">
      <form className="card login-card" onSubmit={handleSubmit} aria-label="login-form">
        <h2>Sign in</h2>

        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="tel"
          placeholder="+254712345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-describedby="phone-help"
        />
        <small id="phone-help">Start with country code e.g. +254</small>

        {error && <div className="error" role="alert">{error}</div>}

        <button type="submit" className="btn">Login</button>

        <div className="note">
          (Mock) To log in for demo, use <strong>+254712345678</strong>
        </div>
      </form>
    </div>
  );
}
