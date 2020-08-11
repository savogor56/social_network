import React from 'react';
import classes from './FormAddsPost.module.css'
import { Form, Field } from 'react-final-form';
import { required, composeValidators, maxLength } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControl/FormsControl';

const FormAddPost = (props) => {
  const onSubmit = (formData) => {
    if (formData.postMessage) {
      props.addPost(formData.postMessage);
    }
  }
  
  return (
    <Form onSubmit={onSubmit} render={({handleSubmit, form, submitting}) => (
      <form 
        className={`${classes.form} wrap`} 
        onSubmit={async (event) => {
          await handleSubmit(event);
          form.reset();
        }} 
      >
        <Field 
          name="postMessage" 
          component={Textarea} 
          placeholder="Введите текст вашего сообщения" 
          validate={composeValidators(required, maxLength(20))}
          className={classes.input_wrap}
        />
        <button onSubmit={form.reset} disabled={submitting}>Send</button>
      </form>
      )}       
    />
  )
}

export default FormAddPost;