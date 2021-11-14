import ACTION_TYPES from '../actions/actionsType';

const initialState = {
  users: [
    {
      id: Date.now(),
      nameUser: 'John',
      emailUser: 'john@test.cpm',
    },
    {
      id: Date.now(),
      nameUser: 'Tom',
      emailUser: 'tom@test.cpm',
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER: {
      const { users } = state;
      const { userData } = action;
      const newUser = {
        ...userData,
        id: Date.now(),
      };
      const newUsers = [...users, newUser];
      return newUsers;
    }
    case ACTION_TYPES.DELETE_USER: {
      const { users } = state;
      const { id } = action;
      const newUsers = [...users];
      newUsers.splice(
        newUsers.findIndex((u) => id === u.id),
        1
      );
      return { users: newUsers };
      /*
        вместо трок 33-35
        users.splice(users.findIndex(u => id === u.id), 1);
        return users;
        */
    }
    case ACTION_TYPES.UPDATE_USER: {
      const { users } = state;
      const { newData } = action;
      const newUsers = [...users];
      const findUserIndex = newUsers.findIndex((u) => newData.id === u.id);
      newUsers[findUserIndex] = { ...newUsers[findUserIndex], ...newData };
      return { users: newUsers };
    }
    default:
      return state;
  }
};

export default userReducer;
