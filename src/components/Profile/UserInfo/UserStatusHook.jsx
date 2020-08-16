import React from 'react';
import classes from './UserInfo.module.css'
import { useState } from 'react';


const UserStatusHook = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.profileStatus);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }
  
  return (
    <div className={classes.status}>
      {
        editMode ?
        <input 
          autoFocus={true}
          type="text"
          onBlur={toggleEditMode}
        /> :
        <span onDoubleClick={toggleEditMode} >
        {props.profileStatus ? props.profileStatus : 'status'}
        </span>
      }   
    </div>
  );
}

export default UserStatusHook;
