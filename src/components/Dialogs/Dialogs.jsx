import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return(
    <div className={`${classes.dialog}`}><NavLink to={path} activeClassName={classes.active} >{props.name}</NavLink></div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.text}</div>
  )
}

const Dialogs = (props) => {

  return(
    <main className={`main wrap ${classes.dialogs}`}>
      <div className={`${classes.dialog_list} wrap`}>
      {props.dialogsData.map((dialog) => {
        return(
        <DialogItem 
          id={dialog.id} 
          name={dialog.name}
        />
        )
      })}    
      </div>
      <div className={`${classes.chat} wrap`}>
        {props.messagesData.map((item) => {
          return(
            <Message 
              text={item.message}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Dialogs;