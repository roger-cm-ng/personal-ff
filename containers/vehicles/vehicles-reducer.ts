import { AnyAction } from 'redux';
import { VehiclesReducer } from './vehicles-types';
import { VEHICLES_FETCHED } from './vehicles-actions';

const initialState: VehiclesReducer = [];

export default (
  state = initialState,
  action: AnyAction,
): VehiclesReducer => {
  switch (action.type) {
    case VEHICLES_FETCHED: {
      return action.payload;
    }

    default:
      return state;
  }
};
