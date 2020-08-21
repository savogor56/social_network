import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../common/Preloader/Preloader';



const Profile = ({isFetching, userProfile, profileStatus, putProfileStatus}) => {
  return(
    <section>
      {isFetching ? 
      <Preloader /> :
      <UserInfo 
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