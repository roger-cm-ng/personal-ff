import { AnyAction } from 'redux';
import {
  DESTINATIONS_CONSTRUCTED,
  PLANET_CHANGED,
  VEHICLE_CHANGED
} from './destinations-actions';
import { DestinationsReducer } from './destinations-types';

const initialState: DestinationsReducer = [];

export default (
  state = initialState,
  action: AnyAction,
): DestinationsReducer => {
  switch (action.type) {
    case DESTINATIONS_CONSTRUCTED: {
      return action.payload;
    }

    case PLANET_CHANGED: {
      const cloned = [...state];
      cloned[action.payload.destination].planet = action.payload.planet;
      cloned[action.payload.destination].vehicle = {
        name: '',
        total_no: 0,
        max_distance: 0,
        speed: 0,
        capacity: false,
        usage: 0
      };
      return cloned;
    }

    case VEHICLE_CHANGED: {
      const cloned = [...state];
      let firstSubtract = false;
      let firstAddition = false;

      cloned[action.payload.destination].vehicle = action.payload.currentVehicle;
      cloned.map((a) => a.vehiclesInstance.map((b) => {
        if (b.name === action.payload.prevVehicle && b.usage > 0 && !firstSubtract) {
          b.usage -= 1;
          firstSubtract = true;
        }
        if (b.name === action.payload.currentVehicle.name && b.usage < b.total_no && !firstAddition) {
          b.usage += 1;
          firstAddition = true;
        }
        return b;
      }));
      return cloned;
    }

    default:
      return state;
  }
};
