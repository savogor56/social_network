import React from 'react';
import classes from './Aside.module.css';
import { NavLink } from 'react-router-dom';
import { Friends } from './Friends/Friends';

export const Aside = (props) => {
  return (
    <aside className={`${classes.aside} wrap`}>
      <div className={`${classes.item} `}>
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>        
      </div>
      <div className={`${classes.item} `}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>        
      </div>
      <div className={`${classes.item} `}>
        <NavLink to="/news" activeClassName={classes.active}>News</NavLink>        
      </div>
      <div className={`${classes.item} `}>
        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>        
      </div>
      <div className={`${classes.item} `}>
        <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>        
      </div>
      <Friends friends={props.state.friends} />
    </aside>
  ) 
};  
