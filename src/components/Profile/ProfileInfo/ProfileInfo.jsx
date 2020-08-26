import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import findWorkImg from '../../../assets/img/find_work.jpg';
import defaultAvatar from '../.././../assets/img/default_avatar.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';


const ProfileInfo = ({userProfile, profileStatus, putProfileStatus, isOwner, saveAvatar}) => {
  if(!userProfile) {
    return <Preloader />
  }

  const avatarSelected = e => {
    if (e.target.files.length) {
      saveAvatar(e.target.files[0]);
    }
  }

  return(
    <div className={classes.user_info + ' wrap'}>
      <div className={classes.main_info}>
          <div className={classes.fullname}>
            <h3>{userProfile.fullName}</h3>
          </div>
          <div className={classes.avatar}>
          <img src={userProfile.photos.large ? userProfile.photos.large : defaultAvatar} alt=""></img>
          </div>
          {isOwner && <input type="file" onChange={avatarSelected} />}
          <div className={classes.about}>{userProfile.aboutMe}</div>
          <ProfileStatus
            profileStatus={profileStatus} 
            putProfileStatus={putProfileStatus} 
          />
      </div>
      <div className={classes.sub_info}>
        {userProfile.lookingForAJob && <img src={findWorkImg} alt='' />}
        {userProfile.lookingForAJob && userProfile.lookingForAJobDescription && 
        <div>{userProfile.lookingForAJobDescription}</div> }
      </div>
      <div className={classes.contacts}>
      <h4>Мои контакты</h4>
      {userProfile.contacts.vk && <div>vk: {userProfile.contacts.vk}</div>}
      {userProfile.contacts.website && <div>website: {userProfile.contacts.website}</div>}
      {userProfile.contacts.facebook && <div>facebook: {userProfile.contacts.facebook}</div>}
      {userProfile.contacts.twitter && <div>twitter: {userProfile.contacts.twitter}</div>}
      {userProfile.contacts.instagram && <div>instagram: {userProfile.contacts.instagram}</div>}
      {userProfile.contacts.youtube && <div>youtube: {userProfile.contacts.youtube}</div>}
      {userProfile.contacts.github && <div>github: {userProfile.contacts.github}</div>}
      {userProfile.contacts.mainLink && <div>mainLink: {userProfile.contacts.mainLink}</div>}
      </div>
    </div>
  )
}

export default ProfileInfo;