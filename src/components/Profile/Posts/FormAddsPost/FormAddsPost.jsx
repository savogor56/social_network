import React from 'react';
import classes from './FormAddsPost.module.css'
import { Form, Field } from 'react-final-form';

const FormAddPost = (props) => {
  const onSubmit = (formData) => {
    if (formData.postMessage) {
      props.addPost(formData.postMessage);
    }
  }
  
  return (
    <Form onSubmit={onSubmit} render={({handleSubmit, form}) => (
      <form 
        className={`${classes.form} wrap`} 
        onSubmit={async (event) => {
          await handleSubmit(event);
          form.reset();
        }} 
      >
        <Field name="postMessage" component="textarea" placeholder="Введите текст вашего сообщения" />
        <button onSubmit={form.reset} >Send</button>
      </form>
      )}       
    />
  )
}

export default FormAddPost;