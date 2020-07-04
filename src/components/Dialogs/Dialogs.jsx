import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DIalogItem/DialogItem';


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