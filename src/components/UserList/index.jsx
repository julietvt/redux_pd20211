import React from "react";
import { connect } from "react-redux";
import { deleteUser, updateUser} from "../../actions";

const UserList = (props) => {
    
    const {users, deleteUserAction, updateUserAction} = props;
    
    const mapUser = ({id, nameUser, emailUser, isAuth}, index) => {
        const del = () => {
            deleteUserAction(id);
        }
        const updateAuth = () => {
            updateUserAction({id: id, isAuth: !isAuth});
        }
        return(
            <li key={id}>
                ID {id} . name: {nameUser} email: {emailUser} isAuth: {isAuth}
                <input type="checkbox" checked={isAuth} onChange={updateAuth} />
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
        },
        updateUserAction: newData => {
            dispatch(updateUser(newData));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);