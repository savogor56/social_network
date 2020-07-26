import React from 'react';
import logo from '../../logo.svg';
import classes from './Header.module.css';
import { connect } from 'react-redux';
import Header from './Header';
import Axios from 'axios';
import { setUserData, authReducer, toggleIsFetching } from '../../redux/auth_reducer';


class HeaderContainer extends React.Component {
  componentDidMount() {
    Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
      withCredentials: true
    })
      .then(response => {
        this.props.toggleIsFetching(this.props.isFetching);
        let {data, resultCode, messages } = response.data;
          this.props.setUserData(data, resultCode, messages);
      })
  }

  render() {
    return(
      <Header isFetching={this.props.isFetching} userData={this.props.userData} isAuth={this.props.isAuth} />
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
  userData: state.auth.data,
  isAuth: state.auth.isAuth
});
const mapDispatchToProps = {
  setUserData,
  toggleIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);