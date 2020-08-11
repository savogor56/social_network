import React from 'react';
import classes from './Login.module.css';
import { Form, Field } from 'react-final-form';
import { required, composeValidators, minLength } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';

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
            {({handleSubmit, pristine, form, submitting, values}) => (
                <form 
                    className={classes.login_form} 
                    onSubmit={async event => {
                        await handleSubmit(event);
                        form.reset();
                    }}
                >
                    <Field
                        name="login"
                        placeholder="E-mail"
                        component={Input}
                        type="text"
                        className={classes.input_wrap}
                        validate={composeValidators(required)}
                    />
                    <Field 
                        name="password" 
                        placeholder="Password" 
                        component={Input}
                        type="password"
                        className={classes.input_wrap} 
                        validate={composeValidators(required, minLength(6))} 
                    />                    
                <div>
                    <Field name="rememberMe"  component="input" type="checkbox" />
                    <span>Remember me</span>
                </div>                
                <button>Login</button>
                </form>
            )}
        </Form>        
    )
}

export default Login
