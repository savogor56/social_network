import React from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <main className="wrap">
            <div className={classes.login_form_wrap}>
                <div className={classes.title}>
                    <h2 >Log In</h2>
                </div>            
                <LoginReduxForm onSubmit={onSubmit} />
            </div>            
        </main>       
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.login_form}>
            <Field name="login" component="input" placeholder={"Login"} />
            <Field name="password" type="password" component="input" placeholder={"Password"} />
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />
                <span>Remember me</span>
            </div>                
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default Login
