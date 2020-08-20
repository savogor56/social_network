import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = ({id, avatar, name}) => {
  let path = `/dialogs/${id}`;
  return(
    <div className={`${classes.dialog} wrap`}>
    <img src={avatar} alt=""/>
    <NavLink to={path} activeClassName={classes.active} >{name}</NavLink>
    </div>
  )
}

export default DialogItem;