import React from 'react';
import {Formik, Form, Field} from 'formik';
import { connect } from 'react-redux';
//import { createUser } from '../../actions';
//import UserSagaList from '../UserSagaList';

const UserSagaForm = (props) => {
    //const {createUserAction} = props;

    const initialUserValues = {
        nameUser: '',
        emailUser: '',
        isAuth: false,
    };

    const submitHandler = (values, formikBag) => {
        //createUserAction(values);
        formikBag.resetForm();
    };

    return(
        <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                <Form>
                    <Field name="nameUser" />
                    <Field name="emailUser" />
                    <button type='submit'>Add user</button>
                </Form>
                );
        }}
        </Formik> 
    );
}

export default UserSagaForm;

/*
const mapStateToProps = state => state.userReducerStates;

 const mapDispatchToProps = dispatch => {
     return{
         createUserAction: data => {
             dispatch(createUser(data));
         }
     };
 };
 
export default connect(mapStateToProps, mapDispatchToProps) (UserForm);
*/