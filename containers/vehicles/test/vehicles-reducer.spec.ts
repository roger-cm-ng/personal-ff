import vehiclesReducer from '../vehicles-reducer';
import { VEHICLES_FETCHED } from './../vehicles-actions';
import {
  VEHICLES_MOCK
} from './vehicles-mock-data';

describe('vehicles reducer', () => {
  const initialState = () => vehiclesReducer([], {
    type: VEHICLES_FETCHED,
    payload: []
  });

  const acquiredState = () => vehiclesReducer(initialState(), {
    type: VEHICLES_FETCHED,
    payload: VEHICLES_MOCK
  });

  it('should return initial state', () => {
    expect(initialState()).toHaveLength(0);
  });

  it('should update the state with acquired data when type is VEHICLES_FETCHED', () => {
    expect(acquiredState()).toMatchSnapshot();
    expect(acquiredState()).toEqual(VEHICLES_MOCK);
  });
});
