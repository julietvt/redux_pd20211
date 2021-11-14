import React from 'react';
import {Formik, Form, Field} from 'formik';
import { connect } from 'react-redux';
import { createUser } from '../../actions';

const UserForm = (props) => {
    const {createUserAction} = props;
    const initialUserValues = {
        nameUser: '',
        emailUser: '',
    };
    const submitHandler = (values, formikBag) => {
        createUserAction(values);
        formikBag.resetForm();
    };
    return(
        // поле Field isAuth не обязательное так как изначально находится в false  <Field name="isAuth" />
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
const mapStateToProps = state => state.userReducerStates;

 const mapDispatchToProps = dispatch => {
     return{
         createUserAction: data => {
             dispatch(createUser(data));
         }
     };
 };

export default connect(mapStateToProps, mapDispatchToProps) (UserForm);