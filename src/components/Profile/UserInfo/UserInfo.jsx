import React from 'react';
import classes from './UserInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import findWorkImg from '../../../assets/img/find_work.jpg';


const UserInfo = (props) => {
  if(!props.userProfile) {
    return <Preloader />
  }
  console.log(props.userProfile.contacts);
  return(
    <div className={classes.user_info + ' wrap'}>
      <div className={classes.main_info}>
          <div className={classes.fullname}>
            <h3>{props.userProfile.fullName}</h3>
          </div>
          <div className={classes.avatar}>
            <img src={props.userProfile.photos.large} alt=""></img>
          </div>
          <div className={classes.about}>{props.userProfile.aboutMe}</div>
      </div>
      <div className={classes.sub_info}>
        {props.userProfile.lookingForAJob && <img src={findWorkImg} alt='' />}
        {props.userProfile.lookingForAJob && props.userProfile.lookingForAJobDescription && 
        <div>{props.userProfile.lookingForAJobDescription}</div> }
      </div>
      <div className={classes.contacts}>
      <h4>Мои контакты</h4>
      {props.userProfile.contacts.vk && <div>vk: {props.userProfile.contacts.vk}</div>}
      {props.userProfile.contacts.website && <div>website: {props.userProfile.contacts.website}</div>}
      {props.userProfile.contacts.facebook && <div>facebook: {props.userProfile.contacts.facebook}</div>}
      {props.userProfile.contacts.twitter && <div>twitter: {props.userProfile.contacts.twitter}</div>}
      {props.userProfile.contacts.instagram && <div>instagram: {props.userProfile.contacts.instagram}</div>}
      {props.userProfile.contacts.youtube && <div>youtube: {props.userProfile.contacts.youtube}</div>}
      {props.userProfile.contacts.github && <div>github: {props.userProfile.contacts.github}</div>}
      {props.userProfile.contacts.mainLink && <div>mainLink: {props.userProfile.contacts.mainLink}</div>}
      </div>
    </div>
  )
}

export default UserInfo;