import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DIalogItem/DialogItem';
import { FormAddMessage } from './FormAddMessage/FormAddMessage';


const Dialogs = (props) => {
  const dialogItems = props.dialogsPage.dialogsData.map((dialog) => {
    return(
    <DialogItem 
      id={dialog.id} 
      key={dialog.id} 
      name={dialog.name}
      avatar={dialog.avatar}
    />
    )
  });

  const messages = props.dialogsPage.messagesData.map((message) => {
    return(
      <Message 
        id={message.id}
        key={message.id}
        text={message.text}w
      />
    )
  });

  return(
    <main className={`main wrap ${classes.dialogs}`}>
      <div className={`${classes.dialog_list} wrap`}>
      {dialogItems}    
      </div>
      <div className={`${classes.chat} wrap`}>
        {messages}        
      </div>
      <div className="form_add">
        <FormAddMessage 
          newMessage={props.dialogsPage.newMessage} 
          sendMessage={props.sendMessage}  
          onMessageChange={props.onMessageChange}
        />
      </div>      
    </main>
  )
}

export default Dialogs;
