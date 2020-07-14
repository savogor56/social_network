import React from 'react';
import classes from './FormAddsPost.module.css'

const FormAddsPost = (props) => {  
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  
  return(
    <div className={`${classes.form} wrap`}>
      <textarea 
        ref={newPostElement} 
        placeholder="Введите текст вашего сообщения" 
        value={props.newPostText} 
        onChange={onPostChange}
      />
      <button onClick={props.addPost}>Отправить</button>
    </div>
  )
}

export default FormAddsPost;