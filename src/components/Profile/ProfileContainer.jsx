import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile, getProfileStatus, putProfileStatus } from './../../redux/profile_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {  
  componentDidMount() {
    const { userData, match, userProfile, getProfile, getProfileStatus } = this.props;
    if (userData !== null) {
      let userId = match.params.userId ?
        match.params.userId : userData.id;
      if (!userProfile || userProfile.userId !== userId) {
        getProfile(userId);
        getProfileStatus(userId);
      }
    }    
  }
   
  render() {    
    return <Profile {...this.props} />    
  }
}

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile,
    userData: state.auth.data,
    isFetching: state.profilePage.isFetching,
    profileStatus: state.profilePage.profileStatus,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  getProfile,
  getProfileStatus,
  putProfileStatus
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    withRouter,
    withAuthRedirect
  )(ProfileContainer);