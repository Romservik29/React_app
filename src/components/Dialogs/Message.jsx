import React from 'react';
import classes from './Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={classes.message_wrapper}>
                <img src="https://sun9-7.userapi.com/c855436/v855436900/a239f/VivQETh5kbo.jpg" />
            <div>
                <div>
                    {props.name}
                </div>
            <div className={classes.text_message}>
                {props.message}
            </div>
            </div>
        </div>
    )
}

export default Message;