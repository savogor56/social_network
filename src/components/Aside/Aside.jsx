import React from 'react';
import classes from './Aside.module.css';
import { Friends } from './Friends/Friends';
import MenuItem from './MenuItem/MenuItem';

const Aside = ({menu, friends}) => {
  let menuElements = menu.map((menuElem) => {
    return(
      <MenuItem key={menuElem.id} menuElem={menuElem} />
    )
  })
  return (
    <aside className={`${classes.aside} wrap`}>
      <div className={classes.menu}>
      {menuElements}
      </div>      
      <Friends friends={friends} />
    </aside>
  ) 
};

export default Aside