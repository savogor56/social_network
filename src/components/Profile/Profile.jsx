import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../common/Preloader/Preloader';



const Profile = (props) => {
  return(
    <main className={`main wrap`}>
      {props.isFetching ? 
      <Preloader /> :
      <UserInfo userProfile={props.userProfile}  profileStatus={props.profileStatus} />  
      }        
      <PostsContainer />
    </main>
  )
}

export default Profile;