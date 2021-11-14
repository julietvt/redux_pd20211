import ACTION_TYPES from '../actions/actionsType';

const initialState = {
  users: [
    {
      id: Date.now(),
      nameUser: 'John',
      email: 'john@test.cpm',
    },
    {
      id: Date.now(),
      nameUser: 'Tom',
      email: 'tom@test.cpm',
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
    default:
      return state;
  }
};
