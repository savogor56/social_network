import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getProfile } from './../../redux/profile_reducer';



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
    if (this.props.isAuth) {
      return <Profile {...this.props} />
    } else {
      return <Redirect to={"/login"} />
    }    
  }
}

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile,
    userData: state.auth.data,
    isFetching: state.profilePage.isFetching,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  getProfile
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));