import { AnyAction } from 'redux';
import { PlanetsReducer } from './planets-types';
import { PLANETS_FETCHED, PLANET_CHOSEN } from './planets-actions';

const initialState: PlanetsReducer = [];

export default (
  state = initialState,
  action: AnyAction,
): PlanetsReducer => {
  switch (action.type) {
    case PLANETS_FETCHED: {
      return action.payload;
    }

    case PLANET_CHOSEN: {
      const cloned = [...state];
      cloned.map((item) => {
        if (item.name === action.planet[0]) {
          item.isChosen = false;
        }
        if (item.name === action.planet[1]) {
          item.isChosen = true;
        }
        return item;
      });
      return cloned;
    }

    default:
      return state;
  }
};
