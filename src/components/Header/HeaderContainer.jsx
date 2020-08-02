import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserData, toggleIsFetching } from '../../redux/auth_reducer';
import { setUserProfile } from '../../redux/profile_reducer';
import { authAPI, profileAPI} from './../../api/api';


class HeaderContainer extends React.Component {
  componentDidMount() {
    if (!this.props.userData) {
      this.props.toggleIsFetching(this.props.isFetching);
      authAPI.getCurrentUserData()
      .then(curUserData => {                
        let {data, resultCode, messages } = curUserData;
        this.props.setUserData(data, resultCode, messages);
        profileAPI.getProfile(data.id)
          .then(data => {
            this.props.toggleIsFetching(this.props.isFetching);
            this.props.setUserProfile(data);
          })
      })
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
  setUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);