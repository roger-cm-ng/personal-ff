import { AnyAction } from 'redux';
import { ERROR_RAISED, ERROR_RESET } from './error-handler-actions';
import { ErrorHandlerReducer } from './error-handler-types';

const initialState: ErrorHandlerReducer = null;

export default (
  state = initialState,
  action: AnyAction,
): ErrorHandlerReducer => {
  switch (action.type) {
    case ERROR_RAISED: {
      return {
        component: action.component
      };
    }

    case ERROR_RESET: {
      return null;
    }

    default:
      return state;
  }
};
