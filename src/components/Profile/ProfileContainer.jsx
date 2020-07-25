import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as Axios from 'axios';
import { setUserProfile } from '../../redux/profile_reducer';



class ProfileContainer extends React.Component {
  componentDidMount() {
    Axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/2')
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



export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);