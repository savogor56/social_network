import React from 'react';
import classes from './FormsControl.module.css';

const FormControl = ({input, meta, ...props}) => {
    const hasError = (meta.error || meta.submitError) && meta.touched;
    return (
        <div className={`${props.className} ${classes.form_control} ${hasError && classes.error}`}>
            {props.children}
            {hasError && <span>{meta.error || meta.submitError}</span>}
        </div> 
    )
}

export const Textarea = (props) => {
    const {input, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} placeholder={restProps.placeholder} />
        </FormControl> 
    )
}

export const Input = (props) => {
    const { input, ...restProps } = props;
    return (
        <FormControl {...props}>
            <label>{restProps.placeholder}</label>
            <input {...input} placeholder={restProps.placeholder} />
        </FormControl>
    )
}