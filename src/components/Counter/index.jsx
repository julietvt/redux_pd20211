import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

/*
const Counter = (props) => {
  return (
    <>
      <h1>{props.value}</h1>
      <button onClick={props.dec}>-</button>
      <button onClick={props.inc}>+</button>
    </>
  );
};

const mapStateToProps = (state) => {
  const { value } = state;
  return {
    value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dec: () => dispatch({ type: ACTION_TYPES.DECREMENT }),
    inc: () => dispatch({ type: ACTION_TYPES.INCREMENT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/

const Counter = (props) => {
  const {count, step, decAction, incAction, setStepAction } = props;
  
  const setStep = e => {
    setStepAction(Number(e.target.value));
  };

  return (
    <div>
      <h1>Counter {count}</h1>
      <input type="number" value={step} onChange={setStep} />
      <button onClick={decAction}>-</button>
      <button onClick={incAction}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => state.counter;

const mapDispatchToProps = (dispatch) => {
  return {
    decAction: () => {
      dispatch(actionCreators.dec());
    },
    incAction: () => {
      dispatch(actionCreators.inc());
    },
    setStepAction: (newStep) => {
      dispatch(actionCreators.setStep(newStep));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
