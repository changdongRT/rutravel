// PostPreview.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileImage, HeartIcon, CommentIcon, BookmarkIcon, ShareIcon } from './Icons';

function PostPreview({ postId }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false); // 북마크 상태 추가
  const [likeCount, setLikeCount] = useState(0); // 댓글 숫자와 별도로 관리

  // 게시글 클릭 시 상세 페이지로 이동
  const handlePostClick = () => {
    navigate(`/post/${postId}`);
  };

  // 하트 아이콘 클릭 시 좋아요 상태 전환 및 하트 숫자 증가/감소
  const handleLikeClick = (e) => {
    e.stopPropagation(); // 게시글 클릭 이벤트 방지
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1); // 클릭할 때만 하트 숫자 변경
  };

  // 댓글 아이콘 클릭 시 댓글 페이지로 이동
  const handleCommentClick = (e) => {
    e.stopPropagation();
    navigate(`/post/${postId}/comments`);
  };

  // 북마크 아이콘 클릭 시 북마크 상태 전환
  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <article style={{ borderBottom: '1px solid gray', marginBottom: '20px', paddingBottom: '10px' }} onClick={handlePostClick}>
      <header style={{ display: 'flex', alignItems: 'center' }}>
        <ProfileImage />
        <div style={{ marginLeft: '10px' }}>
          <h2>사용자 이름</h2>
          <p>@user_id</p>
        </div>
      </header>
      <p>이곳에 게시글 미리보기 내용이 표시됩니다...</p>
      <div className="post-slider" style={{ display: 'flex', overflowX: 'scroll' }}>
        <img src="image1.jpg" alt="Preview" style={{ height: '200px' }} />
        <img src="map-thumbnail.jpg" alt="Map" style={{ height: '200px', marginLeft: '5px' }} />
      </div>
      <footer style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <CommentIcon onClick={handleCommentClick} /> {likeCount}
        <HeartIcon onClick={handleLikeClick} filled={isLiked} />
        <BookmarkIcon onClick={handleBookmarkClick} filled={isBookmarked} />
        <ShareIcon onClick={(e) => e.stopPropagation()} />
      </footer>
    </article>
  );
}

export default PostPreview;
