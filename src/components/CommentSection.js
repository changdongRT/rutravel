// CommentSection.js
import React from 'react';
import { HeartIcon } from './Icons';

function CommentSection() {
  return (
    <div style={{ padding: '10px', borderTop: '1px solid gray' }}>
      <h3>댓글</h3>
      <div className="comment">
        <h4>사용자 이름</h4>
        <p>댓글 내용입니다.</p>
        <small>작성 날짜</small>
        <span>
          <HeartIcon /> 좋아요 수
        </span>
      </div>
      <input type="text" placeholder="댓글 작성" style={{ width: '100%', padding: '10px', marginTop: '10px' }} />
    </div>
  );
}

export default CommentSection;
