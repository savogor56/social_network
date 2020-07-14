import React from 'react';
import Posts from './Posts/Posts';
import UserInfo from './UserInfo/UserInfo';



const Profile = (props) => {
  const userVasya = props.profilePage.users.user1;
  return(
    <main className={`main wrap`}>
      <UserInfo image={userVasya.avatar} name={userVasya.name} email={userVasya.email} description={userVasya.description} />
      <Posts postsData={props.profilePage.postsData} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
    </main>
  )
}

export default Profile;