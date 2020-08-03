import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserData, toggleIsFetching, getCurrentUserData } from '../../redux/auth_reducer';
import { setUserProfile, getProfile } from '../../redux/profile_reducer';
import { authAPI } from './../../api/api';


class HeaderContainer extends React.Component {
  componentDidMount() {
    if (!this.props.userData) {
      this.props.getCurrentUserData();
    }
  }

  render() {
    return(
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
  userData: state.auth.data,
  isAuth: state.auth.isAuth,
  userProfile: state.profilePage.userProfile
});

const mapDispatchToProps = {
  setUserData,
  toggleIsFetching,
  setUserProfile,
  getProfile,
  getCurrentUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);