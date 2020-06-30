import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Aside } from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>    
      <div className="app_wrapper">      
        <Header />  
        <Aside />
        <Route path="/profile" component={Profile}/>
        <Route path="/dialogs" component={Dialogs}/>
        {/* <Route /> */}
        {/* <Profile />*/}
        {/* <Dialogs /> */}
      </div>
    </BrowserRouter>
  );
}




export default App;
