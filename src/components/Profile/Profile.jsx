import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../common/Preloader/Preloader';



const Profile = ({isFetching, userProfile, profileStatus, putProfileStatus, match, saveAvatar, saveProfile}) => {
  return(
    <section>
      {
        isFetching ? 
        <Preloader /> :
        <ProfileInfo 
          userProfile={userProfile} 
          profileStatus={profileStatus} 
          putProfileStatus={putProfileStatus}
          isOwner={!match.params.userId}
          saveAvatar={saveAvatar}
            saveProfile={saveProfile}
        />
      }
      <PostsContainer />
    </section>
  )
}

export default Profile;