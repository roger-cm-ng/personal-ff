import { AnyAction } from 'redux';
import { FindResponse } from './find-types';
import { FALCONE_FOUND } from './find-actions';

const initialState: FindResponse = null;

export default (
  state = initialState,
  action: AnyAction,
): FindResponse => {
  switch (action.type) {
    case FALCONE_FOUND: {
      return action.payload;
    }

    default:
      return state;
  }
};
