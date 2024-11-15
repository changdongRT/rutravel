import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('kakao_auth');
    if (auth) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (authObj) => {
    localStorage.setItem('kakao_auth', JSON.stringify(authObj));
    setIsLoggedIn(true);
  };

  const logout = () => {
    window.Kakao.Auth.logout(() => {
      console.log('로그아웃 성공');
      localStorage.removeItem('kakao_auth');
      setIsLoggedIn(false);
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
