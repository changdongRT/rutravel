import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function MapPage() {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', height: '100vh', backgroundColor: '#f0f0f0' }}>
      {/* 뒤로가기 버튼 */}
      <button
        onClick={() => navigate(-1)} // 이전 페이지로 이동
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '5px 10px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaArrowLeft style={{ marginRight: '5px' }} />
        뒤로가기
      </button>

      {/* 지도 */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <iframe
          title="지도"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1651909483574!2d-122.4194153!3d37.774929499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581d328d91dd7%3A0x0!2zU2FuIEZyYW5jaXNjbw!5e0!3m2!1sen!2sus!4v1634237841740!5m2!1sen!2sus"
          style={{ width: '90%', height: '80%', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}

export default MapPage;
