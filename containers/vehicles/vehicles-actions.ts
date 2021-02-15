import { Dispatch } from 'redux';
import { getVehicles } from '../../helpers/resources';
import { inject } from './vehicles-utils';
import { ERROR_RAISED } from '../error-handler/error-handler-actions';
import ErrorRestart from '../../components/error-content/error-restart/error-restart';

export const VEHICLES_FETCHED = 'VEHICLES_FETCHED';

export const fetchVehicles = () => async (dispatch: Dispatch) => {
  try {
    const payload = await getVehicles();

    const { data, status } = payload;

    if (status >= 200 && status < 300) {
      dispatch({
        type: VEHICLES_FETCHED,
        payload: inject(data)
      });
    } else {
      dispatch({
        type: ERROR_RAISED,
        component: ErrorRestart
      });
    }
  } catch (err) {
    dispatch({
      type: ERROR_RAISED,
      component: ErrorRestart
    });
  }
};
