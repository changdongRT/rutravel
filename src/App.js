import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import PostDetailPage from './pages/PostDetailPage';
import AddPostPage from './pages/AddPostPage';
import SearchPage from './pages/SearchPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Kakao SDK 초기화
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
      console.log('Kakao SDK Initialized');
    }

    // 로그인 상태 확인
    const auth = localStorage.getItem('kakao_auth');
    if (auth) {
      try {
        const parsedAuth = JSON.parse(auth);
        if (parsedAuth?.access_token) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('로그인 정보가 잘못되었습니다:', error);
        localStorage.removeItem('kakao_auth');
      }
    }
  }, []);

  const handleLogout = () => {
    if (window.Kakao.isInitialized()) {
      window.Kakao.Auth.logout(() => {
        console.log('로그아웃 성공');
        localStorage.removeItem('kakao_auth');
        setIsLoggedIn(false);
      });
    } else {
      console.error('Kakao SDK가 초기화되지 않았습니다.');
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn ? <MainPage /> : <Navigate to="/login" />} />
          <Route path="/post/:id" element={isLoggedIn ? <PostDetailPage /> : <Navigate to="/login" />} />
          <Route path="/add-post" element={isLoggedIn ? <AddPostPage /> : <Navigate to="/login" />} />
          <Route path="/search" element={isLoggedIn ? <SearchPage /> : <Navigate to="/login" />} />
          <Route path="/notifications" element={isLoggedIn ? <NotificationsPage /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />} />
          <Route path="/settings" element={isLoggedIn ? <SettingsPage onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/login" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
