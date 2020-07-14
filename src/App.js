import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Aside } from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (       
      <div className="app_wrapper">      
        <Header />  
        <Aside state={props.appState.aside} />
        <Route path="/profile" render={() => <Profile profilePage={props.appState.profilePage} dispatch={props.dispatch} /> }/>
        <Route exact path="/dialogs" render={()=><DialogsContainer store={props.store} dispatch={props.dispatch}/>} />
      </div>    
  );
}

export default App;
