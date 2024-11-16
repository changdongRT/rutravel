import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function CommentSection({ comments, addComment, toggleLikeForComment }) {
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      addComment(commentText); // 새로운 댓글 추가
      setCommentText(''); // 입력 필드 초기화
    }
  };

  return (
    <div style={{ padding: '10px', borderTop: '1px solid gray' }}>
      <h3>댓글</h3>
      <div>
        {comments.map((comment, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <p>{comment.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
              <small>{comment.date}</small>
              <span
                onClick={() => toggleLikeForComment(index)}
                style={{ cursor: 'pointer', marginLeft: '10px', display: 'flex', alignItems: 'center' }}
              >
                <FaHeart style={{ color: 'red', fontSize: '14px' }} />
                <span style={{ marginLeft: '5px' }}>{comment.likes}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="댓글 작성"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        style={{ width: '100%', padding: '10px', marginTop: '10px' }}
      />
      <button onClick={handleAddComment} style={{ marginTop: '10px' }}>댓글 추가</button>
    </div>
  );
}

export default CommentSection;
