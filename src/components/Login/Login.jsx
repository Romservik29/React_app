import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControle';
import { required } from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from "../../redux/auth-reducer";
import css from '../common/FormsControle.module.css'


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </>
}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div >
            <Field placeholder="Login" name="email" component={Input} validate={[required]} />
        </div>
        <div>
            <Field placeholder="Password" name="password" component={Input} type="password" validate={[required]} />
        </div>
        <div>
            <Field placeholder="Login" name="rememberMe" component="input" type="checkbox" />remember me
        </div>
        { props.error &&
            <div className={css.formError}>
                {props.error}
            </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);