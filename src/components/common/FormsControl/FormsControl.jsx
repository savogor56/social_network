import React from 'react';
import classes from './FormsControl.module.css';

const FormControl = ({ meta, className, children }) => {
    const hasError = (meta.error && meta.touched) || meta.submitError;
    return (
        <div className={`${className} ${classes.form_control} ${hasError && classes.error}`}>
            {children}
            {hasError && <span>{meta.error}</span>}
        </div> 
    )
}

export const Textarea = (props) => {
    const {input, placeholder} = props;
    return (
        <FormControl {...props}>
            <label>{props.label}</label>
            <textarea {...input} placeholder={placeholder} />
        </FormControl> 
    )
}

export const Input = (props) => {
    const { input, label, ...restProps } = props;
    return (
        <FormControl {...props}>
            <label>{label}</label>
            <input {...input} {...restProps} />
        </FormControl>
    )
}