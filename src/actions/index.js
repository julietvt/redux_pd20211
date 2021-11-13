import ACTION_TYPES from './actionsType';

export const dec = () => ({ type: ACTION_TYPES.DECREMENT });

export const inc = () => ({ type: ACTION_TYPES.INCREMENT });

export const setStep = (newStep) => ({
  type: ACTION_TYPES.SET_STEP,
  value: newStep,
});
