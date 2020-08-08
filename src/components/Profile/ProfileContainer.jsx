import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile, getProfileStatus, putProfileStatus } from './../../redux/profile_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {  
  componentDidMount() {   
    if (this.props.userData !== null) {
      let userId = this.props.match.params.userId ?
        this.props.match.params.userId : this.props.userData.id;
      if (!this.props.userProfile || this.props.userProfile.userId !== userId) {
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
      }
    }    
  }

  componentDidUpdate() {
    console.log('update')
  }
  
  render() {    
    return <Profile {...this.props} />    
  }
}

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile,
    userData: state.auth.data,
    isFetching: state.profilePage.isFetching,
    profileStatus: state.profilePage.profileStatus
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