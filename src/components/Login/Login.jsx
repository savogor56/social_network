import React from 'react';
import classes from './Login.module.css';
import { Form, Field } from 'react-final-form';

const Login = (props) => {
    const onSubmit = (formData) => {
        if (formData) {
            const {email, password, rememberMe} = formData;
            props.authLogin(email, password, rememberMe)
        }        
    }

    return (
        <main className="wrap">
            <div className={classes.login_form_wrap}>
                <div className={classes.title}>
                    <h2 >Log In</h2>
                </div>            
                <LoginForm onSubmit={onSubmit} />
            </div>            
        </main>       
    )
}

const LoginForm = (props) => {  
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit, pristine, form, submitting}) => (
                <form 
                    className={classes.login_form} 
                    onSubmit={async event => {
                        await handleSubmit(event);
                        form.reset();
                    }} 
                >
                    <Field name="email" component="input" placeholder={"Login"} />
                    <Field name="password" type="password" component="input" placeholder={"Password"} />
                <div>
                    <Field name="rememberMe" component="input" type="checkbox" />
                    <span>Remember me</span>
                </div>                
                <button>Login</button>
                </form>
            )}
        </Form>        
    )
}

export default Login
