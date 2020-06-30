import React from 'react'; 
import classes from './Profile.module.css';
import Posts from '../Posts/Posts';

const Profile = () => {
  return(
    <main className={`${classes.main} wrap`}>
      <div className="main_header">main_header</div>
      <div className={classes.user_info + ' wrap'}>
        <div className="avatar">avatar</div>
        <div className="description">-description</div>
      </div>
      <Posts />
    </main>
  )
}

export default Profile;