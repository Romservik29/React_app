import React from 'react';
import Dialog from './Dialog';
import classes from './Dialogs.module.css';
import Message from './Message';
import InputMessageArea from './InputMessageArea';


const Dialogs = (props) => {
    debugger; 
    let state = props.store.getState().dialogsReducer;
    let dialogsElement = state.dialogs.map(d => <Dialog id={d.id} name={d.name} />);
    let messagesElement = state.messages.map(m => <Message id={m.id} message={m.message} />);

    return (

        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                {dialogsElement}
            </div>

            <div className="messages">
                {messagesElement} 
                <InputMessageArea store={props.store} 
                    dispatch={props.dispatch}
                    />
            </div>   

                   
   

        </div>
    )
}

export default Dialogs;