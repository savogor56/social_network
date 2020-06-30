import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={`${classes.item} wrap`}>
      <div className={classes.avatar}>
        <img src={props.avatar} alt=""></img>
      </div>
      <div className={classes.message}>
      {props.message}
      </div>
    </div>
  )
}

export default Post;