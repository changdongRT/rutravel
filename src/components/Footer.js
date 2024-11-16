// Footer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaPlus, FaBell, FaUser } from 'react-icons/fa'; // Font Awesome 아이콘 임포트

function Footer() {
  const navigate = useNavigate();
  const iconColor = '#333'; // 단색으로 지정할 색상
  const iconSize = 30; // 아이콘 크기 설정

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      borderTop: '1px solid #E0E0E0',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px 0',
      backgroundColor: 'white',
      height: '60px',
      zIndex: 1000
    }}>
      <div onClick={() => navigate('/')} style={{ color: iconColor, fontSize: iconSize }}>
        <FaHome />
      </div>
      <div onClick={() => navigate('/search')} style={{ color: iconColor, fontSize: iconSize }}>
        <FaSearch />
      </div>
      <div onClick={() => navigate('/add-post')} style={{ color: iconColor, fontSize: iconSize }}>
        <FaPlus />
      </div>
      <div onClick={() => navigate('/notifications')} style={{ color: iconColor, fontSize: iconSize }}>
        <FaBell />
      </div>
      <div onClick={() => navigate('/profile')} style={{ color: iconColor, fontSize: iconSize }}>
        <FaUser />
      </div>
    </footer>
  );
}

export default Footer;
