import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';


const InputMessageArea = (props) => {

    let onSendMessage = ()=>{
        props.dispatch(sendMessageActionCreator())
    }

    let onInputTextChange = (e)=>{
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (

        <div className={classes.dialog_wrapper + ' ' + classes.active}>
            <div><textarea
                    placeholder="Entere youre message"
                    onChange={onInputTextChange}                      
                    value={props.store.getState().dialogsReducer.newMessageText}/>
                    </div>
                <div>
            <button onClick={onSendMessage}>Send</button></div>
        </div>

    )
}

export default InputMessageArea;