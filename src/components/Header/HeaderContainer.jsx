import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authLogOut } from '../../redux/auth_reducer';
import { getProfile } from '../../redux/profile_reducer';


class HeaderContainer extends React.Component {
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
  getProfile,
  authLogOut
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);