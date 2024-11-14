// AddPostPage.js
import React from 'react';
import Header from '../components/Header';

function AddPostPage() {
  return (
    <div>
      <Header />
      <div style={{ padding: '10px' }}>
        <button>임시저장</button>
        <div>
          <img src="profile.jpg" alt="Profile" />
          <textarea placeholder="내용을 입력하세요..." style={{ width: '100%', padding: '10px' }}></textarea>
        </div>
        <button>사진 추가</button>
        <button>위치 추가</button>
      </div>
    </div>
  );
}

export default AddPostPage;
