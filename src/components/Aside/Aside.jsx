import React from 'react';
import classes from './Aside.module.css';
import { Friends } from './Friends/Friends';
import MenuItem from './MenuItem/MenuItem';

export const Aside = (props) => {
  let menuElements =     props.state.menu.map((menuElem) => {
    return(
      <MenuItem key={menuElem.id} menuElem={menuElem} />
    )
  })
  return (
    <aside className={`${classes.aside} wrap`}>
      <div className={classes.menu}>
      {menuElements}
      </div>      
      <Friends friends={props.state.friends} />
    </aside>
  ) 
};  
