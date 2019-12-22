import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';


const DialogsContainer = (props) => {
    return <StoreContext.Consumer>{
        (store) => {
            const messages = store.getState().dialogsReducer.messages;
            const dialogs = store.getState().dialogsReducer.dialogs;

            let newMessageText = store.getState().dialogsReducer.newMessageText;

            const updateNewMessageText = (text) => { store.dispatch(updateNewMessageTextActionCreator(text)) };
            const sendMessage = () => { store.dispatch(sendMessageActionCreator()) };
            return (<Dialogs messages={messages} dialogs={dialogs} newMessageText={newMessageText}
                sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} />)
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;