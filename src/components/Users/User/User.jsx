import React from 'react';
import classes from './User.module.css';
import defaultAvatar from '../../../assets/img/default_avatar.jpg';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

const User = (props) => {
  let avatar = props.user.photos.small;

  let toggleFollow = () => {
    let userId = props.user.id;
    let followed = props.user.followed
    if (!followed) {
      Axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + userId, null, {
        withCredentials: true,
        headers: {
          'API-KEY': '2ae6c6ef-750a-4f6e-8e84-8c2e03bc5e97'
        }
      })
        .then(response => {
          if (response.data.resultCode === 0) {            
            props.toggleFollow(followed, userId);
          }
        })  
    } else {
      Axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + userId, {
        withCredentials: true,
        headers: {
          'API-KEY': '2ae6c6ef-750a-4f6e-8e84-8c2e03bc5e97'
        }
      })
        .then(response => {
          if (response.data.resultCode === 0) {
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
        <button onClick={toggleFollow} >
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
