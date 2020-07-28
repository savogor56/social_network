import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as Axios from 'axios';
import { setUserProfile } from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {  
  componentDidMount() {
    
    if (this.props.userData !== null) {
      let userId = this.props.match.params.userId ?
        this.props.match.params.userId : this.props.userData.id;
      Axios
        .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        .then(Response => {
          this.props.setUserProfile(Response.data);
        })
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
    userData: state.auth.data
});

const mapDispatchToProps = {
  setUserProfile
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));