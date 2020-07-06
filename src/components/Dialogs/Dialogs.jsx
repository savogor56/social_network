import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DIalogItem/DialogItem';


const Dialogs = (props) => {

  return(
    <main className={`main wrap ${classes.dialogs}`}>
      <div className={`${classes.dialog_list} wrap`}>
      {props.state.dialogsData.map((dialog) => {
        return(
        <DialogItem 
          id={dialog.id} 
          name={dialog.name}
        />
        )
      })}    
      </div>
      <div className={`${classes.chat} wrap`}>
        {props.state.messagesData.map((message) => {
          return(
            <Message 
              text={message.text}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Dialogs;
