import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import novelsReducer from "./novels-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    novelsPage: novelsReducer,
    auth: authReducer
});

let store = createStore(reducers,composeWithDevTools(
    applyMiddleware(thunk)));
    
window.store = store;

export default store;