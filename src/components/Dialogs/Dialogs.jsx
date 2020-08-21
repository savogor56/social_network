import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DIalogItem/DialogItem';
import { FormAddMessage } from './FormAddMessage/FormAddMessage';


const Dialogs = ({dialogsData, messagesData, sendMessage}) => {
  const dialogItems = dialogsData.map((dialog) => {
    return(
    <DialogItem 
      id={dialog.id} 
      key={dialog.id} 
      name={dialog.name}
      avatar={dialog.avatar}
    />
    )
  });

  const messages = messagesData.map((message) => {
    return(
      <Message 
        id={message.id}
        key={message.id}
        text={message.text}
      />
    )
  });

  return(
    <section className={`${classes.dialogs}`}>
      <div className={`${classes.dialog_list} wrap`}>
      {dialogItems}    
      </div>
      <div className={`${classes.chat} wrap`}>
        {messages}    
      </div>
      <div className={classes.form_add}>
        <FormAddMessage sendMessage={sendMessage} />
      </div>      
    </section>
  )
}

export default Dialogs;
