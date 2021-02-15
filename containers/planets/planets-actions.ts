import { Dispatch } from 'redux';
import { getPlanets } from '../../helpers/resources';
import { inject } from './planets-utils';
import { ERROR_RAISED } from '../error-handler/error-handler-actions';
import ErrorRestart from '../../components/error-content/error-restart/error-restart';

export const PLANETS_FETCHED = 'PLANETS_FETCHED';
export const PLANET_CHOSEN = 'PLANET_CHOSEN';

export const fetchPlanets = () => async (dispatch: Dispatch) => {
  try {
    const payload = await getPlanets();

    const { data, status } = payload;

    if (status >= 200 && status < 300) {
      dispatch({
        type: PLANETS_FETCHED,
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

export const choosePlanet = (planet: string[]) => ({
  type: PLANET_CHOSEN,
  planet
});
