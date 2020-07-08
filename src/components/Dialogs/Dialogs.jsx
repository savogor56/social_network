import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DIalogItem/DialogItem';
import { FormAddMessage } from './FormAddMessage/FormAddMessage';


const Dialogs = (props) => {

  return(
    <main className={`main wrap ${classes.dialogs}`}>
      <div className={`${classes.dialog_list} wrap`}>
      {props.dialogsPage.dialogsData.map((dialog) => {
        return(
        <DialogItem 
          id={dialog.id} 
          key={dialog.id} 
          name={dialog.name}
          avatar={dialog.avatar}
        />
        )
      })}    
      </div>
      <div className={`${classes.chat} wrap`}>
        {props.dialogsPage.messagesData.map((message) => {
          return(
            <Message 
              id={message.id}
              key={message.id}
              text={message.text}
            />
          )
        })}        
      </div>
      <div className="form_add">
        <FormAddMessage />
      </div>
      
    </main>
  )
}

export default Dialogs;
