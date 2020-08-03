import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';
import { toggleIsFetching, setUserProfile, getProfile } from './../../redux/profile_reducer';



class ProfileContainer extends React.Component {  
  componentDidMount() {    
    if (this.props.userData !== null) {
      let userId = this.props.match.params.userId ?
        this.props.match.params.userId : this.props.userData.id;
      if (!this.props.userProfile || this.props.userProfile.userId !== userId) {
        this.props.getProfile(userId)
      }
    }
    
  }
  
  render() {
    return(
      <Profile {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile,
    userData: state.auth.data,
    isFetching: state.profilePage.isFetching
});

const mapDispatchToProps = {
  setUserProfile,
  toggleIsFetching,
  getProfile
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));