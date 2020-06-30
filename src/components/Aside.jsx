import React from 'react';
import classes from './Aside.module.css';

export const Aside = () => {
  console.log(classes);
  return(
    <aside className={classes.aside}>
        <div className={`${classes.item} ${classes.active}`}><a href>Profile</a></div>
        <div className={classes.item}><a href>Messages</a></div>
        <div className={classes.item}><a href>News</a></div>
        <div className={classes.item}><a href>Music</a></div>
      </aside>
  ) 
};  
