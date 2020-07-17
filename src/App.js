import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Aside } from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (       
      <div className="app_wrapper">      
        <Header />  
        <Aside state={props.store.getState().aside} />
        <Route path="/profile" render={() => <Profile profilePage={props.store.getState().profilePage} dispatch={props.dispatch} /> }/>
        <Route exact path="/dialogs" render={() => <DialogsContainer /> } />
      </div>    
  );
}

export default App;
