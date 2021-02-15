import { Dispatch } from 'redux';
import { VehiclesReducer } from '../vehicles/vehicles-types';
import { DestPlan, DestVehi } from './destinations-types';

export const DESTINATIONS_CONSTRUCTED = 'DESTINATIONS_CONSTRUCTED';
export const PLANET_CHANGED = 'PLANET_CHANGED';
export const VEHICLE_CHANGED = 'VEHICLE_CHANGED';

export const constructDestinations = (
  numDestinations: number,
  vehiclesInstance: VehiclesReducer
) => (dispatch: Dispatch) => {
  const payload = [...Array(numDestinations)].map(() => ({
    planet: {
      name: '',
      distance: 0,
      isChosen: false
    },
    vehicle: {
      name: '',
      total_no: 0,
      max_distance: 0,
      speed: 0,
      capacity: false,
      usage: 0
    },
    vehiclesInstance
  }));

  dispatch({
    type: DESTINATIONS_CONSTRUCTED,
    payload
  });
};

export const changePlanet = (destPlan: DestPlan) => ({
  type: PLANET_CHANGED,
  payload: destPlan
});

export const changeVehicle = (destVehi: DestVehi) => ({
  type: VEHICLE_CHANGED,
  payload: destVehi
});
