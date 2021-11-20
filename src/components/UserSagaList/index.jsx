import React from "react";
import { connect } from "react-redux";
import * as actionsCreator from '../../actions';

const UserSagaList = (props) => {
    
    const {users, isFetching, error, getUsers} = props;
    
    const mapUser = ({id, nameUser, emailUser, isAuth}) => {
        const chooseAuth = () => {
           
        return(
            <li key={id}>
                ID {id} . name: {nameUser} email: {emailUser} isAuth: {isAuth}
            </li>
        );
    };
    return <ul>{users.map(mapUser)}</ul>;
    }
}

const mapStateToProps = (state) => state.userSaga;

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(actionsCreator.getUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSagaList);