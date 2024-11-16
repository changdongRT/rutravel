import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommentSection from '../components/CommentSection';
import { FaComment, FaHeart, FaBookmark, FaShare } from 'react-icons/fa';

function PostDetailPage() {
  const [showComments, setShowComments] = useState(false);
  const [commentCount, setCommentCount] = useState(0); // 초기 댓글 수
  const [likeCount, setLikeCount] = useState(0); // 초기 좋아요 수
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [liked, setLiked] = useState(false); // 좋아요 상태 추가
  const [comments, setComments] = useState([]); // 댓글 상태 추가
  const navigate = useNavigate();

  // 게시물 데이터
  const posts = [
    {
      id: 1,
      title: "뉴욕",
      content: "뉴욕의 타운 개쩔어요\n진짜 어메이징 개쩐다리 이야이야오",
      image: "nyc1.jpg",
    },
    {
      id: 2,
      title: "뉴욕 고기집",
      content: "제가 고기파 먹었는데요 진짜 개존맛 했던 것 가세요",
      image: "nyc2.jpg",
    },
    {
      id: 3,
      title: "뉴욕 호텔",
      content: "뉴욕 방종기 너무 멋있어요\n이 위치가 사진 찍기 좋아요\n여러분도 꼭 보셨으면 좋겠네요",
      image: "hotel.jpg",
    },
  ];

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleLike = () => {
    if (liked) {
      setLikeCount((prevCount) => prevCount - 1); // 좋아요 취소
    } else {
      setLikeCount((prevCount) => prevCount + 1); // 좋아요 추가
    }
    setLiked(!liked); // 좋아요 상태 토글
  };

  const handleBookmark = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  const addComment = (newComment) => {
    if (newComment.trim() !== '') {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}.${String(
        currentDate.getMonth() + 1
      ).padStart(2, '0')}.${String(currentDate.getDate()).padStart(2, '0')}`;

      // 새 댓글 추가
      const newCommentData = {
        text: newComment,
        date: formattedDate,
        likes: 0,
      };

      setComments((prevComments) => [...prevComments, newCommentData]); // 댓글 배열 업데이트
      setCommentCount((prevCount) => prevCount + 1); // 댓글 수 증가
    }
  };

  const toggleLikeForComment = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index
          ? {
              ...comment,
              likes: comment.likes + 1,
            }
          : comment
      )
    );
  };

  return (
    <div>
      <Header />

      {/* 상단 프로필 정보 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          borderBottom: '1px solid #ddd',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="profile.jpg"
            alt="프로필 사진"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '10px',
            }}
          />
          <div>
            <strong style={{ fontSize: '16px' }}>닉네임</strong>
            <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>@user_id</p>
            <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>2024.11.16 작성</p>
          </div>
        </div>
        <FaBookmark
          onClick={handleBookmark}
          style={{
            cursor: 'pointer',
            color: isBookmarked ? 'blue' : 'black',
            fontSize: '20px',
          }}
        />
      </div>

      {/* 게시물 컨텐츠 */}
      <div style={{ padding: '10px' }}>
        {posts.map((post, index) => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h2>
              {index + 1}. {post.title}
            </h2>
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: '100%',
                borderRadius: '10px',
                marginTop: '10px',
              }}
            />
            <p style={{ whiteSpace: 'pre-line', marginTop: '10px' }}>
              {post.content}
            </p>
          </div>
        ))}

        {/* 지도 보기 버튼 */}
        <button
          onClick={() => navigate('/map')}
          style={{
            marginTop: '20px',
            padding: '5px 10px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          지도 보기
        </button>
      </div>

      {/* 하단 아이콘 섹션 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '10px',
          borderTop: '1px solid #ddd',
          backgroundColor: '#fff',
        }}
      >
        {/* 댓글 아이콘 */}
        <span
          onClick={toggleComments}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaComment style={{ fontSize: '20px' }} />
          <span style={{ marginLeft: '5px', fontSize: '16px' }}>{commentCount}</span>
        </span>

        {/* 좋아요 아이콘 */}
        <span
          onClick={handleLike}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaHeart
            style={{
              fontSize: '20px',
              color: liked ? 'red' : 'black',
            }}
          />
          <span style={{ marginLeft: '5px', fontSize: '16px' }}>{likeCount}</span>
        </span>

        {/* 북마크 아이콘 */}
        <span
          onClick={handleBookmark}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaBookmark
            style={{
              fontSize: '20px',
              color: isBookmarked ? 'blue' : 'black',
            }}
          />
        </span>

        {/* 공유 아이콘 */}
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <FaShare style={{ fontSize: '20px' }} />
        </span>
      </div>

      {/* 댓글 섹션 */}
      {showComments && (
        <CommentSection
          comments={comments} // 댓글 데이터 전달
          addComment={addComment} // 댓글 추가 함수 전달
          toggleLikeForComment={toggleLikeForComment} // 댓글 좋아요 토글 함수 전달
        />
      )}

      <Footer />
    </div>
  );
}

export default PostDetailPage;
