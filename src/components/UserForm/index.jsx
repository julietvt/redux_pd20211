import React from 'react';
import {Formik, Form, Filed} from 'formik';

const UserForm = () => {
    const initialUserValues = {
        nameUser: '',
        emailUser: '',
        isMaleUser: true,
    };
    const submitHandler = (values, formikBag) => {
        formikBag.resetForm();
    };
    return(
        <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
            {formikProps => {
                <Form>
                    <Filed name="name" />
                    <Filed name="emailUser" />
                    <Filed name="isMaleUser" />
                    <button type='submit' />
                </Form>
            }}
        </Formik> 
    );
}

export default UserForm;