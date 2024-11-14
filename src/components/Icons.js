// Icons.js
import React from 'react';

export function HomeIcon({ onClick }) {
  return <span onClick={onClick} style={iconStyle}>🏠</span>;
}

export function SearchIcon({ onClick }) {
  return <span onClick={onClick} style={iconStyle}>🔍</span>;
}

export function AddPostIcon({ onClick }) {
  return <span onClick={onClick} style={iconStyle}>➕</span>;
}

export function NotificationIcon({ onClick }) {
  return <span onClick={onClick} style={iconStyle}>🔔</span>;
}

export function ProfileIcon({ onClick }) {
  return <span onClick={onClick} style={iconStyle}>👤</span>;
}

export function HeartIcon({ onClick, filled }) {
  return <span onClick={onClick} style={iconStyle}>{filled ? '❤️' : '🤍'}</span>; // 상태에 따라 하트 표시
}

export function CommentIcon({ onClick }) {
  return <span onClick={onClick} style={iconStyle}>💬</span>;
}

export function BookmarkIcon({ onClick, filled }) {
  return <span onClick={onClick} style={iconStyle}>{filled ? '🔖' : '📑'}</span>; // 상태에 따라 북마크 표시
}

export function ShareIcon({ onClick }) {
  return <span onClick={onClick} style={iconStyle}>🔗</span>;
}

export function ProfileImage() {
  return <span style={iconStyle}>👤</span>;
}

// 공통 스타일을 위한 iconStyle 객체
const iconStyle = {
  cursor: 'pointer',
  padding: '5px',
};
