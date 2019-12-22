import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';


const DialogsContainer = (props) => {

    const messages = props.store.getState().dialogsReducer.messages;
    const dialogs = props.store.getState().dialogsReducer.dialogs;

    let newMessageText = props.store.getState().dialogsReducer.newMessageText;

    const updateNewMessageText = (text)=>{props.store.dispatch(updateNewMessageTextActionCreator(text))};
    const sendMessage = ()=> {props.dispatch(sendMessageActionCreator())};


    return <Dialogs messages={messages} dialogs={dialogs} newMessageText={newMessageText} 
                    sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}/>
    
}

export default DialogsContainer;