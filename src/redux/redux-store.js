import { profileReducer } from "./profile_reducer";
import { dialogsReducer } from "./dialogs_reducer";
import { asideReducer } from "./aside_reducer";
import { createStore, combineReducers } from "redux";

let reducers = combineReducers({
 profilePage: profileReducer,
 dialogsPage: dialogsReducer,
 aside: asideReducer
});

let store = createStore(reducers);

export default store;