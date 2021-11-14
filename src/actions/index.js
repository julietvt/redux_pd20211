import ACTION_TYPES from './actionsType';

//counter

export const dec = () => ({ type: ACTION_TYPES.DECREMENT });

export const inc = () => ({ type: ACTION_TYPES.INCREMENT });

export const setStep = (newStep) => ({
  type: ACTION_TYPES.SET_STEP,
  value: newStep,
});

//user

export const createUser = (userData) => {
  return {
    type: ACTION_TYPES.CREATE_USER,
    userData: userData,
  };
};

export const deleteUser = (id) => {
  return {
    type: ACTION_TYPES.DELETE_USER,
    id: id,
  };
};

export const updateUser = (newData) => {
  return {
    type: ACTION_TYPES.UPDATE_USER,
    newData: newData,
  };
};
