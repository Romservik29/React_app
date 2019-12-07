import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    return (

        <div className={classes.dialog_wrapper + ' ' + classes.active}>
            <img src="https://sun9-7.userapi.com/c855436/v855436900/a239f/VivQETh5kbo.jpg" />
            <div className={classes.dialog}>
                <NavLink to={`/dialogs/${props.id}`}>
                    <div>{props.name}</div>
                </NavLink>
                <div>{props.preview}</div>
            </div>
        </div>

    )
}

export default Dialog;