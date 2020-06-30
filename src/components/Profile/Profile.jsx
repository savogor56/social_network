import React from 'react'; 
import classes from './Profile.module.css';
import Posts from '../Posts/Posts';

const Profile = () => {
  return(
    <main className={`main wrap`}>
      <div className={classes.user_info + ' wrap'}>
        <div className={classes.avatar}>
          <img src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" alt=""></img>
        </div>
        <div className="description">Name</div>
        <div className="description">email</div>
        <div className="description">-description</div>
      </div>
      <Posts />
    </main>
  )
}

export default Profile;