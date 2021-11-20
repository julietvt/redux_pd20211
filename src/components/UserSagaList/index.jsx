import React, {useEffect} from "react";
import { connect } from "react-redux";
import * as actionsCreator from '../../actions';

const UserSagaList = (props) => {
    
    const {users, isFetching, error, loadUsers} = props;

     useEffect(() => {
            loadUsers();
        }, []);
    
    const mapUser = ({id, nameUser, emailUser, isAuth}) => {         
        return(
            <li key={id}>
                ID {id}  name: {nameUser} email: {emailUser} auth: {isAuth}
            </li>
        );
    };

   return <ul>{users.map(mapUser)}</ul>;
}

const mapStateToProps = (state) => state.user;

const mapDispatchToProps = (dispatch) => ({
    loadUsers: () => dispatch(actionsCreator.getUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSagaList);