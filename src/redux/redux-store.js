import { profileReducer } from "./profile_reducer";
import { dialogsReducer } from "./dialogs_reducer";
import { asideReducer } from "./aside_reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { usersReducer } from "./users_reducer";
import { authReducer } from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import { appReducer } from './app_reducer';

let reducers = combineReducers({
 profilePage: profileReducer,
 dialogsPage: dialogsReducer,
 aside: asideReducer,
 usersPage: usersReducer,
 auth: authReducer,
 app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;