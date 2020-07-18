import React from 'react';
import classes from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
  return(
      <div className={`${classes.item}`}>
        <NavLink to={props.menuElem.link} activeClassName={classes.active}>{props.menuElem.name}</NavLink>
      </div>
  );
}

export default MenuItem;
