import React from 'react';
import classes from './FormAddsPost.module.css'

const FormAddsPost = (props) => {  
  let newPostElement = React.createRef();

  let updateNewPostText = () => {
    let text = newPostElement.current.value;
    console.log(text);
    props.onPostChange(text);
  }
  
  return (
    <div className={`${classes.form} wrap`}>
      <textarea 
        ref={newPostElement} 
        placeholder="Введите текст вашего сообщения" 
        value={props.newPostText}
        onChange={updateNewPostText}
      />
      <button onClick={props.addPost}>Отправить</button>
    </div>
  )
}

export default FormAddsPost;