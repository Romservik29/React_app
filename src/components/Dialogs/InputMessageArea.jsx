import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const InputMessageArea = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = ()=>{
        let text = newMessageElement.current.value;
        props.addMessage(text);
    }

    let onInputTextChange = ()=>{
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (

        <div className={classes.dialog_wrapper + ' ' + classes.active}>
            <textarea onChange={onInputTextChange} 
                      ref={newMessageElement} 
                      value={props.newMessageText} />

            <button onClick={addMessage}>Send</button>
        </div>

    )
}

export default InputMessageArea;