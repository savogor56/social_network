import React from 'react';
import classes from '../Dialogs.module.css';


const Message = ({text}) => {
  return (
    <div className={classes.message}>{text}</div>
  )
}

export default Message;