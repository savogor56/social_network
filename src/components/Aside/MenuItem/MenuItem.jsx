import React from 'react';
import classes from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';

const MenuItem = ({menuElem}) => {
  return(
      <div className={`${classes.item}`}>
        <NavLink to={menuElem.link} activeClassName={classes.active}>{menuElem.name}</NavLink>
      </div>
  );
}

export default MenuItem;
