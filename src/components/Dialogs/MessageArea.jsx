import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const MessageArea = (props) => {
    return (

        <div className={classes.dialog_wrapper + ' ' + classes.active}>
            <textarea name="" id="" cols="30" rows="10">

            </textarea>

            <button>Send</button>
        </div>

    )
}

export default MessageArea;