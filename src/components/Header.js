import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="app-header">
      <div className="container header-inner">
        <Link to="/" className="logo">ReactPosts</Link>
        <div className="header-actions">
          {user ? (
            <>
              <span className="phone">Signed in: {user.phone}</span>
              <button
                className="btn btn-ghost"
                onClick={() => logout()}
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-ghost">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}
