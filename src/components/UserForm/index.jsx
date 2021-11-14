import React from 'react';
import {Formik, Form, Field} from 'formik';
import { connect } from 'react-redux';
import { createUser } from '../../actions';

const UserForm = () => {
    const initialUserValues = {
        nameUser: '',
        emailUser: '',
    };
    const submitHandler = (values, formikBag) => {
        createUserAction(values);
        formikBag.resetForm();
    };
    return(
        <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
            {formikProps => {
                <Form>
                    <Field name="name" />
                    <Field name="emailUser" />
                    <button type='submit'>Add user</button>
                </Form>
            }}
        </Formik> 
    );
}
const mapStateToProps = state => state.userReducerStates;

 const mapDispatchToProps = dispatch => {
     return{
         createUserAction: data => {
             dispatch(createUser(data));
         }
     };
 };

export default connect(mapStateToProps, mapDispatchToProps) (UserForm);