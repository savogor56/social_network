import React from 'react';
import { Form, Field } from 'react-final-form';
import { Input, Textarea } from '../../../common/FormsControl/FormsControl';
import classes from './ProfileSubInfoForm.module.css';

const ProfileSubInfoForm = ({ userProfile, changeInfo }) => {
    const { lookingForAJob, lookingForAJobDescription, contacts } = userProfile;
    
    return (
        <Form onSubmit={changeInfo}>
            {({submitError, handleSubmit, pristine, submitting, form, values, submitSucceed, submitFailed}) => (
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
                            label="Looking for a job description"
                            placeholder="Looking for a job description"
                        />
                    </div>
                    <div className={classes.about}>
                        <Field
                            name="about"
                            component={Textarea}
                            placeholder="about me"
                        />
                    </div>
                    <button>Save</button>
                </form>
            )}
        </Form>
    )
}

export default ProfileSubInfoForm;
