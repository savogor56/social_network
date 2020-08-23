import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile, getProfileStatus, putProfileStatus } from './../../redux/profile_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
  refreshProfile(userId) {
    const { getProfile, getProfileStatus } = this.props;
      getProfile(userId);
      getProfileStatus(userId);
  }

  componentDidMount() {
    const { userData, match, userProfile } = this.props;
    if (userData !== null) {
      let userId = match.params.userId ?
        match.params.userId : userData.id;
      if (!userProfile || userProfile.userId !== +userId) {
        this.refreshProfile(userId);
      }
    }    
  }

  componentDidUpdate(prevProps) {
    const { userData, match, userProfile } = this.props;
    // debugger
    const userId = match.params.userId ?
        match.params.userId : userData.id;
    if (userProfile && prevProps.userProfile) {
      if (userProfile.userId !== +userId) {
        this.refreshProfile(userId);
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