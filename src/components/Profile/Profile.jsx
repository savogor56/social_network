import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../common/Preloader/Preloader';



const Profile = ({isFetching, userProfile, profileStatus, putProfileStatus}) => {
  return(
    <section>
      {isFetching ? 
      <Preloader /> :
      <ProfileInfo 
        userProfile={userProfile} 
        profileStatus={profileStatus} 
        putProfileStatus={putProfileStatus}      
      />
      }        
      <PostsContainer />
    </section>
  )
}

export default Profile;