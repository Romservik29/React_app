import React from 'react';
import css from './Post.module.css'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControle';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100);

const NewPost = (props) => {

    const onSubmit = (formData) =>{
        props.addPost(formData.newPostText)
    }

    
    return (
    <form onSubmit={props.handleSubmit(onSubmit)} className={css.newPost}>
        <div>
            <Field component={Textarea} 
            placeholder="input message"
            name="newPostText"
            validate={[required,maxLength100]}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>)
}

const newPostReduxForm = reduxForm({
    form: "newPostForm"
})(NewPost)


export default newPostReduxForm;