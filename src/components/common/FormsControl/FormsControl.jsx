import React from 'react';
import classes from './FormsControl.module.css';

const FormControl = ({ meta, className, children }) => {
    const hasError = (meta.error || meta.submitError) && meta.touched;
    return (
        <div className={`${className} ${classes.form_control} ${hasError && classes.error}`}>
            {children}
            {hasError && <span>{meta.error || meta.submitError}</span>}
        </div> 
    )
}

export const Textarea = (props) => {
    const {input, placeholder} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} placeholder={placeholder} />
        </FormControl> 
    )
}

export const Input = (props) => {
    const { input, placeholder } = props;
    return (
        <FormControl {...props}>
            <label>{placeholder}</label>
            <input {...input} placeholder={placeholder} />
        </FormControl>
    )
}