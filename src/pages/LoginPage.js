import React, { useEffect } from 'react'; // useEffect 추가
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Kakao SDK 초기화
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('a71a6284aab775a841380046cc31a0f2'); // 여기서 YOUR_APP_KEY를 실제 JavaScript 키로 바꾸세요
      console.log('Kakao 초기화 완료:', window.Kakao.isInitialized());
    }
  }, []);

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
