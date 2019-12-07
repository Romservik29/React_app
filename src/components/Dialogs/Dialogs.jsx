import React from 'react';
import Dialog from './Dialog';
import classes from './Dialogs.module.css';
import Message from './Message';

let dialogsData = [
    {id:1, name: 'Andrey'},
    {id:2, name: 'Denis'},
    {id:3, name:'Vasya'}
];

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs_wrapper}>           
            <div className={classes.dialogs}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />                                
            </div>

            <div className="messages">
                <Message/>
                <Message/>
            </div>
        </div>
    )
}

export default Dialogs;