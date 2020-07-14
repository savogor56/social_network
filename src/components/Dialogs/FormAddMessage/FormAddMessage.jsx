import React from 'react';
import classes from './FormAddMessage.module.css';

export const FormAddMessage = (props) => {

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };

  return (
        <div className={`${classes.form} wrap`}>
          <textarea
            placeholder="Введите текст вашего сообщения"
            value={props.newMessage}
            onChange={onMessageChange}
          ></textarea>
          <button onClick={props.sendMessage} >Отправить</button>
        </div>
  )
}
