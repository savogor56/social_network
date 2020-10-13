import React, { lazy } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initialisedApp } from './redux/app_reducer';
import Preloader from './components/common/Preloader/Preloader';
import AsideContainer from './components/Aside/AsideContainer';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));


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
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />                  
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/users" render={() => <UsersContainer pageTitle={"Список Пользователей"} />} />
            <Route path="/login" render={() => <LoginContainer />} />
            <Route path="*">
              <div>
                404 Not Found
              </div>
            </Route>
          </Switch>         
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
