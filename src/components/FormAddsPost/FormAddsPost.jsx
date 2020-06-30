import React from 'react';
import classes from './FormAddsPost.module.css'

const FormAddsPost = () => {
  return(
    <div className={`${classes.flex} wrap`}>
      <textarea></textarea>
      <button>Отправить</button>
    </div>
  )
}

export default FormAddsPost;