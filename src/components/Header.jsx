import React from 'react';
import logo from '../logo.svg';
import './Header.css';
const Header = () => {
  return(
    <header className="header">
      <img src={logo} alt="" /> 
    </header>
  )
}

export default Header;