// PostDetailPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommentSection from '../components/CommentSection';

function PostDetailPage() {
  return (
    <div>
      <Header />
      <div className="post-detail" style={{ padding: '10px' }}>
        <h2>1. 뉴욕 <span>지도 아이콘 1</span></h2>
        <p>뉴욕의 탑은 개쩔어요 진짜 어메이징 개쩐다리 이야이야오</p>
        <div className="images" style={{ display: 'flex', overflowX: 'scroll' }}>
          <img src="nyc1.jpg" alt="New York" style={{ height: '200px' }} />
          <img src="nyc2.jpg" alt="New York Meat Restaurant" style={{ height: '200px', marginLeft: '10px' }} />
        </div>
      </div>
      <Footer />
      <CommentSection />
    </div>
  );
}

export default PostDetailPage;
