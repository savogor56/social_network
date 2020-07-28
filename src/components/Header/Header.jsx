import React from 'react';
import logo from '../../logo.svg';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import defaultAvatar from '../../assets/img/default_avatar.jpg';

const Header = (props) => {
  return(
    <header className={`${classes.header} wrap`}>
      <div className={classes.info_block}>
        <img src={logo} alt="" /> 
        <div className={classes.title}>Social Network</div>
      </div>
      {        
        props.isFetching ? <Preloader /> :
        <div className={classes.login_block}>
          {
            props.isAuth ?
            <div className={classes.user_info}>
              <span>{props.userData.login}</span>
              {props.userProfile && <img src={props.userProfile.photos.small ? props.userProfile.photos.small : defaultAvatar} alt=""/>}
            </div> :
            <NavLink to='/login'>LogIn</NavLink>
          }          
        </div>
      }     
      
    </header>
  )
}

export default Header;