import React from 'react';
import {Field,reduxForm} from 'redux-form'
import { Input } from '../common/FormsControle';
import { required } from '../../utils/validators/validators';

const Login = (props) => {
    const onSubmit = (formData)=>{
        console.log(formData);
    }
    return <>
    <h1>LOGIN</h1>
     <LoginReduxForm onSubmit={onSubmit}/>
    </>
}

const LoginForm = (props)=>{
    return<form onSubmit={props.handleSubmit}>
    <div >
        <Field placeholder="Login" name="login" component={Input} validate={[required]}/>
    </div>
    <div>
        <Field placeholder="Password" name="password" component={Input} validate={[required]}/>

    </div>
    <div>
        <Field placeholder="Login" name="rememberMe" component="input" type="checkbox"/>remember me
    </div>
    <div>
        <button>Login</button>
    </div>
</form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;