export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const required = value => {
    if(value) {
        return undefined;
    }
    return 'Required' 
}

export const minLength = minLength => value => {
    if (value && value.length < minLength) return `Min length is ${minLength}`;
    return undefined
}

export const maxLength = maxLength => value => {
    if (value && value.length > maxLength) return `Max length is ${maxLength}`;
    return undefined;
}


    