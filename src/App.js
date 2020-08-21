import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initialisedApp } from './redux/app_reducer';
import Preloader from './components/common/Preloader/Preloader';
import AsideContainer from './components/Aside/AsideContainer';



class App extends React.Component {
  componentDidMount() {
    this.props.initialisedApp();
  }

  render() {
    const {initialised} = this.props;
    if (!initialised) {
      return <Preloader />
    }
    return (
      <div className="background blur">
        <div className="app_wrapper">
          <HeaderContainer />
          <AsideContainer />
          <main className="wrap main">
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route exact path="/dialogs" render={() => <DialogsContainer />} />
            <Route exact path="/users" render={() => <UsersContainer />} />
            <Route exact path="/login" render={() => <LoginContainer />} />
          </main>          
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
