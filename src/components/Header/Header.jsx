import React from 'react';
import logo from '../../logo.svg';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

const Header = ({isFetching, isAuth, userData, authLogOut, avatar}) => {
  return(
    <header className={`${classes.header} wrap`}>
      <div className={classes.info_block}>
        <img src={logo} alt="" />   
        <div className={classes.title}>Social Network</div>
      </div>
      {        
        isFetching ? <Preloader /> :
        <div className={classes.login_block}>
          {
            isAuth ?
            <div className={classes.user_info}>
              <span>{userData.login}</span>
            <img src={avatar} alt=""/>
              <button onClick={authLogOut} >Log Out</button>
            </div> :
            <NavLink to='/login'>LogIn</NavLink>
          }          
        </div>
      }
    </header>
  )
}

export default Header;