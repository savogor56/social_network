import * as serviceWorker from './serviceWorker';
import state from './state';
import {addPost} from './state';
import { renderEntireTree } from './render';


renderEntireTree(state, addPost);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
