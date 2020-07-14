import React from 'react';
// import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DIalogItem/DialogItem';
// import { FormAddMessage } from './FormAddMessage/FormAddMessage';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs_reducer';


const DialogsContainer = (props) => {
  
  const dialogsPage = props.store.getState().dialogsPage;

  const sendMessage = () => {
    let action = sendMessageActionCreator();
    props.dispatch(action);
  };

  const onMessageChange = (text) => {
    let action = updateNewMessageActionCreator(text);
    props.dispatch(action);
  };

  return(
    <Dialogs 
      dialogsPage={dialogsPage}
      sendMessage={sendMessage}
      onMessageChange={onMessageChange}
    />
  )
}

export default DialogsContainer;
