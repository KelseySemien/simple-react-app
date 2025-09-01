import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();
const AUTH_KEY = 'react_simple_auth_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (phone) => {
    // Mock logic: accept +254712345678 as valid (per spec example)
    if (phone === '+254712345678') {
      const u = { phone };
      setUser(u);
      localStorage.setItem(AUTH_KEY, JSON.stringify(u));
      return { success: true };
    }
    // valid format but not accepted by mock logic
    return { success: false, message: 'Phone not recognized (mock login).' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
