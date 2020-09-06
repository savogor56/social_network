import React from 'react';
import { Form, Field } from 'react-final-form';
import { Input, Textarea } from '../../../common/FormsControl/FormsControl';
import classes from './ProfileSubInfoForm.module.css';
import { FORM_ERROR } from 'final-form';

const ProfileSubInfoForm = ({ userProfile, changeInfo, toggleEditMode }) => {

    const onSubmit = async (formData) => {
        const errorMessage = await changeInfo(formData);
        console.log(formData.contacts);
        
        if (errorMessage) {
            let error = { 
                [FORM_ERROR]: errorMessage,
                contacts: {}
             };
            
            Object.keys(formData.contacts).forEach(key => {
                if (errorMessage.toLowerCase().includes(key.toLowerCase())) {                    
                    error.contacts[key] = errorMessage;
                }
            })
           return error
        } 
    }

    return (
        <Form onSubmit={onSubmit} initialValues={userProfile}>
            {({submitError, handleSubmit, submitting, pristine}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="fullName"
                            component={Input}
                            type="text"
                            label="Full Name"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className={classes.find_job}>
                        <Field
                            name="lookingForAJob"
                            component={Input}
                            type="checkbox"
                            label="Looking for a job"
                        />
                        <Field
                            name="lookingForAJobDescription"
                            component={Textarea}
                            placeholder="Looking for a job description"
                        />
                    </div>
                    <div className={classes.about}>
                        <Field
                            name="aboutMe"
                            component={Textarea}
                            placeholder="about me"
                            label="about me"
                        />
                    </div>
                    <h3>Contacts:</h3>
                    <div className={classes.contacts}>
                        {Object.keys(userProfile.contacts).map(key => (
                            <div key={key} className={classes.contact}>
                                <Field  name={`contacts.${key}`} component={Input}  label={key} />
                            </div>
                            
                        ))}
                    </div>
                    {submitError && <div className={classes.error} >{submitError}</div>}
                    <button disabled={submitting || pristine}>Save</button>
                    <button onClick={toggleEditMode}>Cancel</button>
                </form>
            )}
        </Form>
    )
}

export default ProfileSubInfoForm;
