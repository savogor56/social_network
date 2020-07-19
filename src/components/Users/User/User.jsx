import React from 'react';
import classes from './User.module.css';
import defaultAvatar from '../../../assets/img/default_avatar.jpg';

const User = (props) => {
  let avatar = props.user.photos.small;

  let toggleFollow = () => {
    let userId = props.user.id;
    let followed = props.user.followed
    props.toggleFollow(followed, userId);
  }

  return (
    <div className={classes.user}>
      <div className={classes.user_follow}>
        <img src={avatar ? avatar : defaultAvatar } alt="" />
        <button onClick={toggleFollow} >
        {props.user.followed ? 'follow' : 'unfollow'}
        </button>
      </div>
      <div className={classes.user_info}>
        <div className={classes.description}>
          <span>{props.user.name}</span><span>{``}</span>
        </div>
        <div className={classes.status}>
          <span>{props.user.status}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
