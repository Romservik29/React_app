import React from 'react';
import css from './Post.module.css'
import { Field, reduxForm } from 'redux-form';



const NewPost = (props) => {

    const onSubmit = (formData) =>{
        props.addPost(formData.newPostText)
    }

    
    return (
    <form onSubmit={props.handleSubmit(onSubmit)} className={css.newPost}>
        <div>
            <Field component="textarea" name="newPostText"
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