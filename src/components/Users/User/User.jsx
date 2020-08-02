import React from 'react';
import classes from './User.module.css';
import defaultAvatar from '../../../assets/img/default_avatar.jpg';
import { NavLink } from 'react-router-dom';
import {followAPI} from '../../../api/api';

const User = (props) => {
  let avatar = props.user.photos.small;

  let toggleFollow = () => {
    let userId = props.user.id;
    let followed = props.user.followed;
    props.toggleIsFollowing(true, userId);
    if (!followed) {  
      followAPI.follow(userId)
        .then(data => {
          props.toggleIsFollowing(false, userId);
          if (data.resultCode === 0) {            
            props.toggleFollow(followed, userId);
          }
        })  
    } else {
      followAPI.unfollow(userId)
        .then(data => {          
          props.toggleIsFollowing(false, userId);
          if (data.resultCode === 0) {
            props.toggleFollow(followed, userId);
          }
        })
    }      
  }

  return (
    <div className={classes.user}>
      <div className={classes.user_follow}>
      <NavLink to={`/profile/${props.user.id}`}>
      <img src={avatar ? avatar : defaultAvatar } alt="" />
      </NavLink>        
        <button disabled={props.followingInProgress.some((id) => id === props.user.id )} onClick={toggleFollow} >
        {!props.user.followed ? 'follow' : 'unfollow'}
        </button>
      </div>
      <div className={classes.user_info}>
        <div className={classes.description}>
          <span>{props.user.name}</span>
        </div>
        <div className={classes.status}>
          <span>{props.user.status}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
