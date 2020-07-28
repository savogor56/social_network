import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Axios from 'axios';
import { setUserData, toggleIsFetching } from '../../redux/auth_reducer';
import { setUserProfile } from '../../redux/profile_reducer';


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(this.props.isFetching);
    Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
      withCredentials: true
    })
      .then(response => {        
        let {data, resultCode, messages } = response.data;
        this.props.setUserData(data, resultCode, messages);
        Axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + data.id)
          .then(Response => {
            this.props.toggleIsFetching(this.props.isFetching);
            this.props.setUserProfile(Response.data);
          })
          .catch(reason => {
            this.props.toggleIsFetching(this.props.isFetching);
          })
      })
      .catch(reason => {
        this.props.toggleIsFetching(this.props.isFetching);
      })
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