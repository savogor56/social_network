import { profileReducer } from "./profile_reducer";
import { dialogsReducer } from "./dialogs_reducer";
import { asideReducer } from "./aside_reducer";
import { createStore, combineReducers } from "redux";
import { usersReducer } from "./users_reducer";

let reducers = combineReducers({
 profilePage: profileReducer,
 dialogsPage: dialogsReducer,
 aside: asideReducer,
 usersPage: usersReducer
});

let store = createStore(reducers);

export default store;