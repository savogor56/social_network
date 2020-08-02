import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile, profileAPI } from '../../api/api';
import { toggleIsFetching, setUserProfile } from './../../redux/profile_reducer';



class ProfileContainer extends React.Component {  
  componentDidMount() {    
    if (this.props.userData !== null) {
      let userId = this.props.match.params.userId ?
        this.props.match.params.userId : this.props.userData.id;
      if (!this.props.userProfile || this.props.userProfile.userId !== userId) {
        this.props.toggleIsFetching(this.props.isFetching);
        profileAPI.getProfile(userId)
          .then(data => {
            this.props.toggleIsFetching(this.props.isFetching);
            this.props.setUserProfile(data);
          })
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
  toggleIsFetching
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));