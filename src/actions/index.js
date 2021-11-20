import ACTION_TYPES from './actionsType';

//counter

export const dec = () => ({ type: ACTION_TYPES.DECREMENT });

export const inc = () => ({ type: ACTION_TYPES.INCREMENT });

export const setStep = (newStep) => ({
  type: ACTION_TYPES.SET_STEP,
  value: newStep,
});

//user

export const createUser = (data) => {
  return {
    type: ACTION_TYPES.CREATE_USER,
    data: data,
  };
};

export const deleteUser = (id) => {
  return {
    type: ACTION_TYPES.DELETE_USER,
    id: id,
  };
};

export const updateUser = (data) => {
  return {
    type: ACTION_TYPES.UPDATE_USER,
    data: data,
  };
};

//auth

export const authLogin = (data) => {
  return {
    type: ACTION_TYPES.AUTH_LOGIN,
    data: data,
  };
};

export const authClear = () => {
  return {
    type: ACTION_TYPES.AUTH_CLEAR,
  };
};

// user saga : get

export const getUserRequest = () => ({
  type: ACTION_TYPES.GET_USER_REQUEST,
});

export const getUserError = (error) => ({
  type: ACTION_TYPES.GET_USER_ERROR,
  error: error,
});

export const getUserSuccess = (users) => ({
  type: ACTION_TYPES.GET_USER_SUCCESS,
  users: users,
});

export const getUserAction = () => ({
  type: ACTION_TYPES.GET_USER_ACTION,
});

// user saga: create

export const createUserRequest = () => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
});

export const createUserError = (error) => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  error: error,
});

export const createUserSuccess = (users) => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  users: users,
});

export const createUserAction = (users) => ({
  type: ACTION_TYPES.CREATE_USER_ACTION,
  users: users,
});
