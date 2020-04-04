import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import novelsReducer from "./novels-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {composeWithDevTools} from 'redux-devtools-extension'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    novelsPage: novelsReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers,composeWithDevTools(
    applyMiddleware(thunk)));
    
export default store;