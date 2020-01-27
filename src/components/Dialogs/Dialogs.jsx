import React from 'react';
import Dialog from './Dialog';
import classes from './Dialogs.module.css';
import Message from './Message';
import InputMessageArea from './InputMessageArea';


const Dialogs = (props) => {
    
    let dialogsElement = props.dialogs.map(d => <Dialog id={d.id} key={d.id} name={d.name} />);
    let messagesElement = props.messages.map(m => <Message id={m.id} key={m.id}message={m.message} />);

    return (

        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                {dialogsElement}
            </div>
                <div>
            <div className="messages">
                {messagesElement} 
                
            </div>   
            <InputMessageArea updateNewMessageText={props.updateNewMessageText} sendMessage={props.sendMessage} newMessageText ={props.newMessageText}/>
            </div> 
   

        </div>
    )
}

export default Dialogs;