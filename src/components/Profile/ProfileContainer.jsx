import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as Axios from 'axios';
import { setUserProfile } from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
  debugger
  componentDidMount() {
    let userId = this.props.match.params.userId ?
    this.props.match.params.userId : 2;
    Axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then(Response => {
        this.props.setUserProfile(Response.data);
      })
  }
  
  render() {
    return(
      <Profile {...this.props} userProfile={this.props.userProfile} />
    )
  }
}

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile    
});

const mapDispatchToProps = {
  setUserProfile
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));