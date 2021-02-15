import findReducer from '../find-reducer';
import { FALCONE_FOUND } from './../find-actions';
import {
  FALCONE_FOUND_SUCCESS,
  FALCONE_FOUND_FAILURE
} from './find-mock-data';

describe('find reducer - success data', () => {
  const initialState = () => findReducer(null, {
    type: FALCONE_FOUND,
    payload: null
  });

  const acquiredState = () => findReducer(initialState(), {
    type: FALCONE_FOUND,
    payload: FALCONE_FOUND_SUCCESS
  });

  it('should return initial state', () => {
    expect(initialState()).toEqual(null);
  });

  it('should update the state with acquired data when type is FALCONE_FOUND', () => {
    expect(acquiredState()).toMatchSnapshot();
    expect(acquiredState()).toEqual(FALCONE_FOUND_SUCCESS);
  });
});

describe('find reducer - failure data', () => {
  const initialState = () => findReducer(null, {
    type: FALCONE_FOUND,
    payload: null
  });

  const acquiredState = () => findReducer(initialState(), {
    type: FALCONE_FOUND,
    payload: FALCONE_FOUND_FAILURE
  });

  it('should return initial state', () => {
    expect(initialState()).toEqual(null);
  });

  it('should update the state with acquired data when type is FALCONE_FOUND', () => {
    expect(acquiredState()).toMatchSnapshot();
    expect(acquiredState()).toEqual(FALCONE_FOUND_FAILURE);
  });
});