import React, { useEffect, useState } from 'react';
import classes from './UserInfo.module.css';


const UserStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.profileStatus);

  useEffect(() => {
    setStatus(props.profileStatus);
  }, [props.profileStatus]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  const sendStatus = () => {
    toggleEditMode();
    if (status !== props.profileStatus){
      props.putProfileStatus(status);
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
        {props.profileStatus ? props.profileStatus : 'status'}
        </span>
      }   
    </div>
  );
}

export default UserStatus;
