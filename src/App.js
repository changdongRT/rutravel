// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostDetailPage from './pages/PostDetailPage';
import AddPostPage from './pages/AddPostPage';
import SearchPage from './pages/SearchPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import MapPage from './pages/MapPage'; // 지도 페이지 추가

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/add-post" element={<AddPostPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/map" element={<MapPage />} /> {/* 지도 페이지 경로 추가 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
