import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';



const InputMessageArea = (props) => {

    let onSendMessage = ()=>{
        props.sendMessage();
    }

    let onInputTextChange = (e)=>{
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (

        <div className={classes.dialog_wrapper + ' ' + classes.active}>
            <div><textarea
                    placeholder="Entre your message"
                    onChange={onInputTextChange}                      
                    value={props.newMessageText}/>
                    </div>
                <div>
            <button onClick={onSendMessage}>Send</button></div>
        </div>

    )
}

export default InputMessageArea;