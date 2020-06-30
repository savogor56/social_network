import React from 'react';
import classes from './Aside.module.css';

export const Aside = () => {
  console.log(classes);
  return (
    <aside className={`${classes.aside} wrap`}>
      <div className={`${classes.item} wrap`}><a href >Profile</a></div>
      <div className={`${classes.item} wrap`}><a href>Messages</a></div>
      <div className={`${classes.item} wrap`}><a href>News</a></div>
      <div className={`${classes.item} wrap`}><a href>Music</a></div>
    </aside>
  ) 
};  
