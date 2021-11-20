import React from 'react';
import {Formik, Form, Field} from 'formik';
import { connect } from 'react-redux';
import { authLogin, authClear } from '../../actions';

const LoginForm = (props) => {
    const { authLoginAction, authClearAction} = props;
    const {isFetching, error} = props;
    const initialUserValues = {
        emailUser: '',
        passwUser: '',
    };
    const submitHandler = (values, formikBag) => {
        authLoginAction(values);
        formikBag.resetForm();
    };
    return(
        <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                <Form>
                    <Field name="emailUser" type="text"/>
                    <Field name="passwUser" type="password"/>
                    <button type='submit'>Submit</button>
                </Form>
                );
        }}
        </Formik> 
    );
}
const mapStateToProps = state => state.auth;

 const mapDispatchToProps = dispatch => {
     return{
         authLoginAction: data => {
             dispatch(authLogin(data));
         },
         authClearAction: () => dispatch(authClear()), 
     };
 };

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);