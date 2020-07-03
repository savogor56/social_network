import React from 'react';
import classes from './FormAddsPost.module.css'

const FormAddsPost = () => {
  return(
    <div className={`${classes.form} wrap`}>
      <textarea placeholder="Введите текст вашего сообщения"></textarea>
      <button>Отправить</button>
    </div>
  )
}

export default FormAddsPost;