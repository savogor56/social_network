import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { authLogin } from './../../redux/auth_reducer';

class LoginContainer extends Component {
  
  render() {
    return (
      <Login {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  error: state.auth.error
})

const mapDispatchToProps = {
  authLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
