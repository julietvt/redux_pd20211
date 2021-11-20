import ACTION_TYPES from '../actions/actionsType';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

const userSagaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_USER_SUCCESS: {
      const { users } = action;
      return {
        ...state,
        isFetching: false,
        users: users,
      };
    }
    case ACTION_TYPES.GET_USER_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }
    default:
      return state;
  }
};

export default userSagaReducer;
