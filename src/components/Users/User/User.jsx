import React from 'react';
import classes from './User.module.css';
import defaultAvatar from '../../../assets/img/default_avatar.jpg';
import { NavLink } from 'react-router-dom';

const User = ({user, follow, unfollow, followingInProgress, toggleIsFollowing }) => {
  let avatar = user.photos.small;
  let toggleFollow = () => {
    toggleIsFollowing(true, user.id);
    if (!user.followed) {
      follow(user.followed, user.id);
    } else {
      unfollow(user.followed, user.id);
    }      
  }

  return (
    <div className={classes.user}>
      <div className={classes.user_follow}>
      <NavLink to={`/profile/${user.id}`}>
      <img src={avatar ? avatar : defaultAvatar } alt="" />
      </NavLink>        
        <button disabled={followingInProgress.some((id) => id === user.id )} onClick={toggleFollow} >
        {!user.followed ? 'follow' : 'unfollow'}
        </button>
      </div>
      <div className={classes.user_info}>
        <div className={classes.description}>
          <span>{user.name}</span>
        </div>
        <div className={classes.status}>
          <span>{user.status}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
