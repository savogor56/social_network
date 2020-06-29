import React from 'react'; 
import classes from './Profile.module.css';

const Profile = () => {
  return(
    <main className={classes.main}>
      <div className="main_header">main_header</div>
      <div className={classes.user_info}>
        <div className="avatar">avatar</div>
        <div className="description">description</div>
      </div>
      <div className="posts">
        <div className={classes.item}>item</div>
        <div className={classes.item}>item</div>
        <div className={classes.item}>item</div>
        <div className={classes.item} >item</div>
      </div>
    </main>
  )
}

export default Profile;