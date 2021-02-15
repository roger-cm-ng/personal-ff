import { AnyAction } from 'redux';
import { TIME_ADDED } from './time-taken-actions';

const initialState: number = 0;

export default (
  state = initialState,
  action: AnyAction,
): number => {
  switch (action.type) {
    case TIME_ADDED: {
      return action.duration;
    }

    default:
      return state;
  }
};
