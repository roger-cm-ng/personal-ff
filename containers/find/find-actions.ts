import { Dispatch } from 'redux';
import { postToken, postFind } from '../../helpers/resources';
import { FindBody } from './find-types';
import { ERROR_RAISED } from '../error-handler/error-handler-actions';
// eslint-disable-next-line import/no-cycle
import ErrorFindAgain from '../../components/error-content/error-find-again/error-find-again';

export const TOKEN_FETCHED = 'TOKEN_FETCHED';
export const FALCONE_FOUND = 'FALCONE_FOUND';

export const fetchToken = () => async (dispatch: Dispatch) => {
  try {
    const payload = await postToken();

    const { data, status } = payload;

    if (status >= 200 && status < 300) {
      dispatch({
        type: TOKEN_FETCHED,
        payload: data
      });
    } else {
      dispatch({
        type: ERROR_RAISED,
        component: ErrorFindAgain
      });
    }
  } catch (err) {
    dispatch({
      type: ERROR_RAISED,
      component: ErrorFindAgain
    });
  }
};

export const findFalcone = (body: FindBody) => async (dispatch: Dispatch) => {
  try {
    const payload = await postFind(body);

    const { data, status } = payload;

    if (status >= 200 && status < 300) {
      dispatch({
        type: FALCONE_FOUND,
        payload: data
      });
    } else {
      dispatch({
        type: ERROR_RAISED,
        component: ErrorFindAgain
      });
    }
  } catch (err) {
    dispatch({
      type: ERROR_RAISED,
      component: ErrorFindAgain
    });
  }
};
