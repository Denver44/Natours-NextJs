import * as actionIs from './actions.interfaces';
import { actionTypes } from './actions.interfaces';
import { User } from './data.interfaces';

export const failure = (error: Error): actionIs.Failure => {
  return {
    type: actionTypes.FAILURE,
    error,
  };
};

export const increment = (): actionIs.Increment => {
  return { type: actionTypes.INCREMENT };
};

export const decrement = (): actionIs.Decrement => {
  return { type: actionTypes.DECREMENT };
};

export const reset = (): actionIs.Reset => {
  return { type: actionTypes.RESET };
};

export const loadData = (): actionIs.LoadData => {
  return { type: actionTypes.LOAD_DATA };
};

export const loadDataSuccess = (data: User[]): actionIs.LoadDataSuccess => {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
};

export const startClock = (): actionIs.StartClock => {
  return { type: actionTypes.START_CLOCK };
};

export const tickClock = (isServer: boolean): actionIs.TickClock => {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
};
