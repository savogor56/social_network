import React from 'react';
import classes from './Post.module.css';
import defaultAvatar from '../../../../assets/img/default_avatar.jpg';

const Post = ({avatar, message}) => {
  return (
    <div className={`${classes.item} wrap`}>
      <div className={classes.avatar}>
        <img src={avatar || defaultAvatar} alt=""></img>
      </div>
      <div className={classes.message}>
      {message}
      </div>
    </div>
  )
}

export default Post;