import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; // CSS 파일 가져오기
import logo from '../assets/main-logo.png'; // 로고 이미지 경로 설정

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log('로그인 성공', authObj);

        // 로그인 정보 저장
        localStorage.setItem('kakao_auth', JSON.stringify(authObj));

        // 즉시 메인 페이지로 이동
        navigate('/');
      },
      fail: function (err) {
        console.error('로그인 실패', err);
      },
    });
  };

  return (
    <div className="login-container">
      {/* 로고 */}
      <img src={logo} alt="우리 로고" className="logo" />

      {/* 로그인 버튼 */}
      <button className="kakao-login-button" onClick={handleLogin}>
        <span className="visually-hidden">카카오로 시작하기</span>
      </button>
    </div>
  );
};

export default LoginPage;