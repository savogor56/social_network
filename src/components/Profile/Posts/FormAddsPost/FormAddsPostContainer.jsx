import React from 'react';
import classes from './FormAddsPost.module.css'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/profile_reducer';
import FormAddsPost from './FormAddsPost';

const FormAddsPostContainer = (props) => {  
  // let newPostElement = React.createRef();

  let addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  

  
  return(
    <FormAddsPost updateNewPostText={onPostChange} addPost={addPost} newPostText={props.newPostText}/>
    // <div className={`${classes.form} wrap`}>
    //   <textarea 
    //     ref={newPostElement} 
    //     placeholder="Введите текст вашего сообщения" 
    //     value={props.newPostText} 
    //     onChange={onPostChange}
    //   />
    //   <button onClick={addPost}>Отправить</button>
    // </div>
  )
}

export default FormAddsPostContainer;