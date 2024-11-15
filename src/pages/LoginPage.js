import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>로그인 화면</h2>
      <button onClick={handleLogin}>카카오로 로그인</button>
    </div>
  );
};

export default LoginPage;
