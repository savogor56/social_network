import React from 'react';
import classes from './Login.module.css';
import { Form, Field } from 'react-final-form';
import { required, composeValidators, minLength } from '../../utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';
import { Redirect } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';

const Login = ({isAuth, authLogin, captchaUrl}) => {
    const login = async (formData) => {
        if (formData) {
            const { email, password, rememberMe, captcha } = formData;
            return await authLogin(email, password, rememberMe, captcha);                
        }        
    }

    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
            <section className={classes.login_form_wrap}>
                <div className={classes.title}>
                    <h2 >Log In</h2>
                </div>            
            <LoginForm login={login} captchaUrl={captchaUrl} />
            </section>                
    )
}

const LoginForm = ({login, captchaUrl}) => {  
    const onSubmit = async (formData) => {
        const result = await login(formData);
        if (!result.isSuccess) {
            return {
                [FORM_ERROR]: result.errorMessage
            }
        }
    }
    return (
        <Form onSubmit={onSubmit}>
            {({submitError, handleSubmit, pristine, form, submitting, submitSucceeded}) => (
                <form 
                    className={classes.login_form} 
                    onSubmit={async event => {
                        await handleSubmit(event);
                        if (submitSucceeded) {
                            form.reset();
                        }
                    }}
                >
                    <Field
                        name="email"
                        placeholder="E-mail"
                        label="E-mail"
                        component={Input}
                        type="text"
                        className={classes.input_wrap}
                        validate={required}
                    />
                    <Field 
                        name="password" 
                        placeholder="Password" 
                        label="Password" 
                        component={Input}
                        type="password"
                        className={classes.input_wrap} 
                        validate={composeValidators(required, minLength(6))} 
                    />                    
                <div>
                    <Field name="rememberMe"  component="input" type="checkbox" />
                    <span>Remember me</span>
                </div>
                {captchaUrl &&
                 <div>
                    <Field name="captcha" component={Input} label="captcha" validate={required} />
                    <img src={captchaUrl} alt="" />
                 </div>}
                {submitError && <div className={classes.error}>{submitError}</div>}               
                <button disabled={submitting}>Login</button>
                </form>
            )}
        </Form>        
    )
}

export default Login
