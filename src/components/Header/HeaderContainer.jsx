import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getCurrentUserData } from '../../redux/auth_reducer';
import { getProfile } from '../../redux/profile_reducer';


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
  getProfile,
  getCurrentUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);