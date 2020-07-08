import React from 'react';
import classes from './FormAddsPost.module.css'

const FormAddsPost = (props) => {
  
  let newPostElement = React.createRef();
  let addPost = () => {
      let text = newPostElement.current.value;
      console.log(text);
      props.addPost(text);
      newPostElement.current.value = '';
  }

  
  return(
    <div className={`${classes.form} wrap`}>
      <textarea ref={newPostElement} placeholder="Введите текст вашего сообщения"></textarea>
      <button onClick={addPost}>Отправить</button>
    </div>
  )
}

export default FormAddsPost;