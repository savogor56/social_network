import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return(
    <div className={`${classes.dialog} wrap`}>
    <img src={props.avatar} alt=""/>
    <NavLink to={path} activeClassName={classes.active} >{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;