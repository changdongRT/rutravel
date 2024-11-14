// Footer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, SearchIcon, AddPostIcon, NotificationIcon, ProfileIcon } from './Icons';

function Footer() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  const handleAddPostClick = () => {
    navigate('/add-post');
  };

  const handleNotificationClick = () => {
    navigate('/notifications');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <footer style={{ borderTop: '1px solid gray', display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
      <HomeIcon onClick={handleHomeClick} />
      <SearchIcon onClick={handleSearchClick} />
      <AddPostIcon onClick={handleAddPostClick} />
      <NotificationIcon onClick={handleNotificationClick} />
      <ProfileIcon onClick={handleProfileClick} />
    </footer>
  );
}

export default Footer;
