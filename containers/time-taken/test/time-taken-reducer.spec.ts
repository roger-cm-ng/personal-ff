import timeTakenReducer from '../time-taken-reducer';
import { TIME_ADDED } from '../time-taken-actions';

describe('time taken reducer', () => {
  const initialState = () => timeTakenReducer(0, {
    type: TIME_ADDED,
    duration: 0
  });

  const acquiredState = () => timeTakenReducer(initialState(), {
    type: TIME_ADDED,
    duration: 200
  });

  it('should return initial state', () => {
    expect(initialState()).toEqual(0);
  });

  it('should update the state with acquired data when type is VEHICLES_FETCHED', () => {
    expect(acquiredState()).toMatchSnapshot();
    expect(acquiredState()).toEqual(200);
  });
});