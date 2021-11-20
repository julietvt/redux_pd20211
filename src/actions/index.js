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
