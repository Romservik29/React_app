import { createStore, combineReducers } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import novelsReducer from "./novels-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    novelsPage: novelsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;