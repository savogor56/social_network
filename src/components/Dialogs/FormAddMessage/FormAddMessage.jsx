import React from 'react';
import classes from './FormAddMessage.module.css';

export const FormAddMessage = () => {
  return (
        <div className={`${classes.form} wrap`}>
          <textarea  placeholder="Введите текст вашего сообщения"></textarea>
          <button >Отправить</button>
        </div>
  )
}
