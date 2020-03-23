import React from 'react';
import classes from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';

const InputMessageArea = (props) => {

    const onSubmit = (formData) => {
       props.sendMessage(formData.newMessageText) 
       console.log(formData)
    }


    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className={classes.dialog_wrapper + ' ' + classes.active}>
            <div><Field
                component="textarea"
                name = "newMessageText"
                placeholder="Entre your message"
            />
            </div>
            <div>
                <button>Send</button></div>
        </form>

    )
}

const newMessageReduxForm = reduxForm({
    form: 'newMessageInputForm'
})(InputMessageArea)

export default newMessageReduxForm;