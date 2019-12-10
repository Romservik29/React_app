import React from 'react';
import Dialog from './Dialog';
import classes from './Dialogs.module.css';
import Message from './Message';


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name} />);

    let messagesElement = props.state.messages.map(m => <Message id={m.id} message={m.message} />);

    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                {dialogsElement}

            </div>

            <div className="messages">
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;