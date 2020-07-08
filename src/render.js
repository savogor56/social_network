import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import state from './state';
// import {addPost} from './state';


export let renderEntireTree = (state, addPost, changePost) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} changePost={changePost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

