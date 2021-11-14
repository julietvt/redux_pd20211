import ACTION_TYPES from '../actions/actionsType';

const initialState = {
  users: [
    {
      id: Date.now(),
      nameUser: 'John',
      emailUser: 'john@test.cpm',
      isAuth: false,
    },
    {
      id: Date.now(),
      nameUser: 'Tom',
      emailUser: 'tom@test.cpm',
      isAuth: false,
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER: {
      const { users } = state;
      const { data } = action;
      const newUser = {
        ...data,
        id: Date.now(),
        isAuth: false,
      };
      const newUsers = [...users, newUser];
      return { users: newUsers };
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
      const { data } = action;
      const newUsers = [...users];
      const index = newUsers.findIndex((u) => data.id === u.id);
      newUsers[index] = { ...newUsers[index], ...data };
      return { users: newUsers };
    }
    default:
      return state;
  }
};

export default userReducer;
