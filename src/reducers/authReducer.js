import ACTION_TYPES from '../actions/actionsType';

const initialState = {
  isFetching: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.AUTH_REQUEST: {
      return {
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.AUTH_SUCCESS: {
      return {
        isFetching: false,
        error: null,
      };
    }
    case ACTION_TYPES.AUTH_ERROR: {
      return {
        isFetching: false,
        error: action.error,
      };
    }
    //case ACTION_TYPES.AUTH_LOGIN: { } работает как default
    case ACTION_TYPES.AUTH_CLEAR: {
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;
