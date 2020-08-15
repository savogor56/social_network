import React from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { getCurrentUserData } from './redux/auth_reducer';
import { compose } from 'redux';



class App extends React.Component {
  componentDidMount() {
      this.props.getCurrentUserData();
  }

  render() {
    return (
      <div className="background blur">
        <div className="app_wrapper">
          <HeaderContainer />
          <Aside />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route exact path="/dialogs" render={() => <DialogsContainer />} />
          <Route exact path="/users" render={() => <UsersContainer />} />
          <Route exact path="/login" render={() => <LoginContainer />} />
        </div>
      </div> 
    )
  }
}


const mapDispatchToProps = {
  getCurrentUserData
}

export default connect(null, mapDispatchToProps)(App);
