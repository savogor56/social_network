import React from 'react';
import classes from './FormAddMessage.module.css';
import { Form, Field } from 'react-final-form';
import { required, composeValidators, maxLength } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';

export const FormAddMessage = ({sendMessage}) => {
  const onSubmit = (formData) => {
    if(formData.newMessage) {
      sendMessage(formData.newMessage)
    }
  }

  return (
    <Form onSubmit={onSubmit} render={({handleSubmit, form}) => (
        <form 
          className={`${classes.form} wrap`}
          onSubmit={async event => {
            await handleSubmit(event);
            form.reset();
          }}
        >
        <Field 
          name="newMessage" 
          validate={composeValidators(required, maxLength(20))} 
          component={Textarea} 
          placeholder="Введите текст вашего сообщения" 
          className={classes.input_wrap} 
        />
          <button>Send</button>
        </form>
      )} 
    />
  )
}
