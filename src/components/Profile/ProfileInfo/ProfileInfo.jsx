import React, { useState } from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import findWorkImg from '../../../assets/img/find_work.jpg';
import defaultAvatar from '../.././../assets/img/default_avatar.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileContact from './ProfileContact/ProfileContact';
import AvatarSelector from './AvatarSelector/AvatarSelector';
import ProfileSubInfoForm from './ProfileSubInfoForm/ProfileSubInfoForm';


const ProfileInfo = ({userProfile, profileStatus, putProfileStatus, isOwner, saveAvatar, saveProfile}) => {
  const [editMode, setEditMode] = useState(false);

  if(!userProfile) {
    return <Preloader />
  }

  const avatarSelect = e => {
    if (e.target.files.length) {
      saveAvatar(e.target.files[0]);
    }
  }

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  const changeInfo = async (formData) => {
    console.log(formData);
    const saveResult = await saveProfile(formData);
    if (saveResult.isSuccess) {
      toggleEditMode();
    } else {
      return saveResult.errorMessage
    }
    
  }

  return(
    <div className={classes.profile_info + ' wrap'}>
      <div className={classes.main_info}>
          { !editMode && <div className={classes.fullname}>
            <h3>{userProfile.fullName}</h3>
          </div>}
          <div className={classes.avatar}>
          <img src={userProfile.photos.large ? userProfile.photos.large : defaultAvatar} alt=""></img>
          </div>
        
          {isOwner && <AvatarSelector avatarSelect={avatarSelect} />}
          <div className={classes.about}>{userProfile.aboutMe}</div>
          <ProfileStatus
            profileStatus={profileStatus} 
            putProfileStatus={putProfileStatus} 
          />
      </div>
      {editMode ? 
      <ProfileSubInfoForm toggleEditMode={toggleEditMode} userProfile={userProfile} changeInfo={changeInfo} /> : 
      <ProfileSubInfo toggleEditMode={toggleEditMode} userProfile={userProfile} isOwner={isOwner} />}
    </div>
  )
}

const ProfileSubInfo = ({userProfile,  isOwner, toggleEditMode}) => {
  const { lookingForAJob, lookingForAJobDescription, contacts } = userProfile;  
  return (
    <>
    {isOwner && <div><button onClick={toggleEditMode}>Change profile info</button></div>}
    <div className={classes.find_job}>
      {lookingForAJob && <img src={findWorkImg} alt='' />}
      {lookingForAJob && lookingForAJobDescription &&
      <div>{lookingForAJobDescription}</div>}
    </div>
    <div className={classes.contacts_wrap}>
      <h4>Contacts</h4>
      <div className={classes.contacts}>
        {Object.keys(contacts).map(key => (
          <div key={key} className={classes.contact}>
            <ProfileContact  contactTitle={key} contact={contacts[key]} />
          </div>          
        ))}
      </div>      
    </div>
    </>
  )
}

export default ProfileInfo;