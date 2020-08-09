import React from 'react';
import './App.css';
import { Aside } from './components/Aside/Aside';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';

const App = (props) => {
  return (
    <div className="background blur">
    <div className="app_wrapper">      
        <HeaderContainer />
        <Aside state={props.store.getState().aside} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer /> }/>
        <Route exact path="/dialogs" render={() => <DialogsContainer /> } />
        <Route exact path="/users" render={() => <UsersContainer /> } />
        <Route exact path="/login" render={() => <LoginContainer /> } />
      </div>  
    </div>        
  );
}

export default App;
