import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';


const InputMessageArea = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = ()=>{
        props.dispatch(sendMessageActionCreator())
    }

    let onInputTextChange = ()=>{
        debugger;
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (

        <div className={classes.dialog_wrapper + ' ' + classes.active}>
            <textarea onChange={onInputTextChange} 
                      ref={newMessageElement} 
                      value={props.newMessageText} />

            <button onClick={sendMessage}>Send</button>
        </div>

    )
}

export default InputMessageArea;