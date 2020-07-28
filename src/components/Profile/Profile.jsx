import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from './Posts/PostsContainer';



const Profile = (props) => {
  return(
    <main className={`main wrap`}>
      <UserInfo userProfile={props.userProfile} />    
      <PostsContainer />
    </main>
  )
}

export default Profile;