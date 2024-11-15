// src/pages/SettingsPage.js
import React from 'react';

function SettingsPage({ onLogout }) {
  return (
    <div>
      <h2>설정 페이지</h2>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
}

export default SettingsPage;
