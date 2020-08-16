import React from 'react';
import classes from './UserInfo.module.css'
import { useState } from 'react';


const UserStatusHook = (props) => {
  let state = useState(false);
  let editMode = state[0];
  let setEditMode = state[1];
  !editMode && setEditMode(true);
  return (
    <div className={classes.status}>
      {
        editMode ?
        <input 
          autoFocus={true}
          type="text"
        /> :
        <span  >
        {props.profileStatus ? props.profileStatus : 'status'}
        </span>
      }   
    </div>
  );
}

export default UserStatusHook;
