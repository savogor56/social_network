import React from 'react';
import classes from './UserInfo.module.css'

const UserInfo = (props) => {
  return(
    <div className={classes.user_info + ' wrap'}>
        <div className={classes.avatar}>
          <img src={props.image} alt=""></img>
        </div>
        <div>{props.name}</div>
        <div>{props.email}</div>
        <div>{props.description}</div>
      </div>
  )
}

export default UserInfo;