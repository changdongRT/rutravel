import React from 'react';
import FeatherIcon from './FeatherIcon'; // 커스텀 깃털 아이콘
import Logo from './Logo'; // 로고 SVG 아이콘

function Header() {
  return (
    <header style={{ borderBottom: '1px solid gray', padding: '10px', display: 'flex', alignItems: 'center'}}>
      <FeatherIcon size="40px" /> 
      <Logo size="32px" />
    </header>
  );
}

export default Header;