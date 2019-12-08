import React from 'react';
import Dialog from './Dialog';
import classes from './Dialogs.module.css';
import Message from './Message';

let dialogs = [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Denis' },
    { id: 3, name: 'Peter' }
];

let messages = [
    { id: 1, message: "HI" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Do you cut my grass" }
]

let dialogsElement = dialogs.map(d => <Dialog id={d.id} name={d.name} />);

let messagesElement = messages.map(m => <Message id={m.id} message={m.message} />);

const Dialogs = (props) => {
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