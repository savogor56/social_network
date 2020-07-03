import React from 'react';
import logo from '../../logo.svg';
import classes from './Header.module.css';
const Header = () => {
  // console.log(logo)
  return(
    <header className={`${classes.header} wrap`}>
      <img src={logo} alt="" /> 
      <div className={classes.title}>Social Network</div>
    </header>
  ) 
}

export default Header;