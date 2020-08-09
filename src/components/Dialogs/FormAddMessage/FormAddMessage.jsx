import React from 'react';
import classes from './FormAddMessage.module.css';
import { Form, Field } from 'react-final-form';

// export const FormAddMessage = (props) => {

//   let onMessageChange = (e) => {
//     let text = e.target.value;
//     props.onMessageChange(text);
//   };

//   return (
//         <div className={`${classes.form} wrap`}>
//           <textarea
//             placeholder="Введите текст вашего сообщения"
//             value={props.newMessage}
//             onChange={onMessageChange}
//           ></textarea>
//           <button onClick={props.sendMessage} >Отправить</button>
//         </div>
//   )
// }


export const FormAddMessage = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    if(formData.newMessage) {
      props.sendMessage(formData.newMessage)
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
        <Field name="newMessage" component="textarea" placeholder="Введите текст вашего сообщения" />
        <button>Send</button>
      </form>
    )} />
  )
}
