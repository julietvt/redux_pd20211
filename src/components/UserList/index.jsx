import React from "react";
import { connect } from "react-redux";
import { deleteUser} from "../../actions";

const UserList = () => {
    
    const {users, deleteUserAction} = props;
    
    const mapUser = ({id, nameUser, emailUser}, index) => {
        const del = () => {
            deleteUserAction(id);
        }
        return(
            <li key={id}>
                ID {id} . name: {nameUser} email: {emailUser}
                <button onClick={del}>Delete user</button>
            </li>
        );
    };
    return <ul>{users.map(mapUser)}</ul>;
}

const mapStateToProps = (state) => state.userReducerStates;

const mapDispatchToProps = (dispatch) => {
    return{
        deleteUserAction: id => {
            dispatch(deleteUser(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);