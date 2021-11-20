import ACTION_TYPES from '../actions/actionsType';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

const userSagaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_SAGA_REQUEST: {
      return {
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.USER_SAGA_SUCCESS: {
      return {
        isFetching: false,
        error: null,
      };
    }
    case ACTION_TYPES.USER_SAGA_ERROR: {
      return {
        isFetching: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default userSagaReducer;
