import React, { useEffect, useState } from 'react';
import classes from './UserInfo.module.css';


const UserStatus = ({profileStatus, putProfileStatus}) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(profileStatus);

  useEffect(() => {
    setStatus(profileStatus);
  }, [profileStatus]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  const sendStatus = () => {
    toggleEditMode();
    if (status !== profileStatus){
      putProfileStatus(status);
    }
  }

  const onChangeStatus = (e) => {
    const status = e.target.value;
    setStatus(status)
  }
  
  return (
    <div className={classes.status}>
      {
        editMode ?
        <input 
          autoFocus={true}
          type="text"
          onBlur={sendStatus}
          onChange={onChangeStatus}
          value={status}
        /> :
        <span onDoubleClick={toggleEditMode} >
        {profileStatus ? profileStatus : 'status'}
        </span>
      }   
    </div>
  );
}

export default UserStatus;
