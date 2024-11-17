import React from 'react';
import { useNavigate } from 'react-router-dom';
import settingIcon from '../assets/ic-setting.svg'; // SVG 파일 가져오기

function ProfilePage() {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings'); // 설정 페이지로 이동
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>마이페이지에서 사용자 정보를 확인할 수 있습니다.</p>
      {/* 설정 페이지로 이동하는 톱니바퀴 버튼 */}
      <button
        onClick={handleSettingsClick}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          position: 'absolute',
          top: '20px',
          right: '20px',
        }}
      >
        <img
          src={settingIcon}
          alt="Settings"
          style={{ width: '24px', height: '24px' }}
        />
      </button>
    </div>
  );
}

export default ProfilePage;
