import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Aside } from './components/Aside/Aside';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (
    <div className="background blur">
    <div className="app_wrapper">      
        <Header />  
        <Aside state={props.store.getState().aside} />
        <Route path="/profile" render={() => <ProfileContainer /> }/>
        <Route exact path="/dialogs" render={() => <DialogsContainer /> } />
        <Route exact path="/users" render={() => <UsersContainer /> } />
      </div>  
    </div>        
  );
}

export default App;
