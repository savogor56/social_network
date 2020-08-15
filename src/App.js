import React from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initialisedApp } from './redux/app_reducer';
import Preloader from './components/common/Preloader/Preloader';



class App extends React.Component {
  componentDidMount() {
    this.props.initialisedApp();
  }

  render() {
    if (!this.props.initialised) {
      return <Preloader />
    }
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

const mapStateToProps = (state) => ({
  initialised: state.app.initialised
})

const mapDispatchToProps = {
  initialisedApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
