import errorHandlerReducer from '../error-handler-reducer';
import {
  ERROR_RAISED,
  ERROR_RESET
} from '../error-handler-actions';
import ErrorFindAgain from '../../../components/error-content/error-find-again/error-find-again';
import ErrorRestart from '../../../components/error-content/error-restart/error-restart';


describe('error handler reducer', () => {
  const initialState = () => errorHandlerReducer(null, {
    type: ERROR_RESET
  });

  const errorRestartState = () => errorHandlerReducer(initialState(), {
    type: ERROR_RAISED,
    component: ErrorRestart
  });

  const errorResetState = () => errorHandlerReducer(errorRestartState(), {
    type: ERROR_RESET
  });

  const errorFindAgainState = () => errorHandlerReducer(errorResetState(), {
    type: ERROR_RAISED,
    component: ErrorFindAgain
  });

  it('should return initial state', () => {
    expect(initialState()).toEqual(null);
  });

  it('should update the state with Error Restart component when type is ERROR_RAISED', () => {
    expect(errorRestartState()).toEqual({
      component: ErrorRestart
    });
  });
});