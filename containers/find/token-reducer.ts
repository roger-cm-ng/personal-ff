import { AnyAction } from 'redux';
import { Token } from './find-types';
import { TOKEN_FETCHED } from './find-actions';

const initialState: Token = null;

export default (
  state = initialState,
  action: AnyAction,
): Token => {
  switch (action.type) {
    case TOKEN_FETCHED: {
      return action.payload;
    }

    default:
      return state;
  }
};
