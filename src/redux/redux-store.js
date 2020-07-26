import { profileReducer } from "./profile_reducer";
import { dialogsReducer } from "./dialogs_reducer";
import { asideReducer } from "./aside_reducer";
import { createStore, combineReducers } from "redux";
import { usersReducer } from "./users_reducer";
import { authReducer } from "./auth_reducer";

let reducers = combineReducers({
 profilePage: profileReducer,
 dialogsPage: dialogsReducer,
 aside: asideReducer,
 usersPage: usersReducer,
 auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;