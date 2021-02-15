import destinationsReducer from '../destinations-reducer';
import {
  DESTINATIONS_CONSTRUCTED,
  PLANET_CHANGED,
  VEHICLE_CHANGED
} from './../destinations-actions';
import {
  DESTINATIONS_INIT,
  DESTINATIONS_EMPTY_TO_DONLON,
  DESTINATIONS_DONLON_TO_ENCHAI,
  DESTINATIONS_EMPTY_TO_SPACE_POD,
  DESTINATIONS_SPACE_POD_TO_SPACE_ROCKET
} from './destinations-mock-data';

describe('destinations reducer', () => {
  const initialState = () => destinationsReducer([], {
    type: DESTINATIONS_CONSTRUCTED,
    payload: []
  });

  const constructedState = () => destinationsReducer(initialState(), {
    type: DESTINATIONS_CONSTRUCTED,
    payload: DESTINATIONS_INIT
  });

  const emptyToDonlonState = () => destinationsReducer(constructedState(), {
    type: PLANET_CHANGED,
    payload: {
      destination: 0,
      planet: {
        name: 'Donlon',
        distance: 100,
        isChosen: true
      }
    }
  });

  const donlonToEnchaiState = () => destinationsReducer(emptyToDonlonState(), {
    type: PLANET_CHANGED,
    payload: {
      destination: 0,
      planet: {
        name: 'Enchai',
        distance: 200,
        isChosen: true
      }
    }
  });

  const emptyToSpacePodState = () => destinationsReducer(donlonToEnchaiState(), {
    type: VEHICLE_CHANGED,
    payload: {
      destination: 0,
      prevVehicle: '',
      currentVehicle: {
        name: 'Space pod',
        total_no: 2,
        max_distance: 200,
        speed: 2,
        capacity: true,
        usage: 1
      }
    }
  });

  const spacePodToSpaceRocketState = () => destinationsReducer(emptyToSpacePodState(), {
    type: 'VEHICLE_CHANGED',
    payload: {
      destination: 0,
      prevVehicle: 'Space pod',
      currentVehicle: {
        name: 'Space rocket',
        total_no: 1,
        max_distance: 300,
        speed: 4,
        capacity: true,
        usage: 1
      }
    }
  });

  it('should return initial state', () => {
    expect(initialState()).toHaveLength(0);
  });

  it('should update the state with constructed data when type is DESTINATIONS_CONSTRUCTED', () => {
    expect(constructedState()).toMatchSnapshot();
    expect(constructedState()).toEqual(DESTINATIONS_INIT);
  });

  it('should update the state with planet Donlon when type is PLANET_CHANGED', () => {
    expect(emptyToDonlonState()).toEqual(DESTINATIONS_EMPTY_TO_DONLON);
  });

  it('should update the state with planet Enchai when type is PLANET_CHANGED', () => {
    expect(donlonToEnchaiState()).toEqual(DESTINATIONS_DONLON_TO_ENCHAI);
  });

  it('should update the state with vehicle Space pod when type is VEHICLE_CHANGED', () => {
    expect(emptyToSpacePodState()).toEqual(DESTINATIONS_EMPTY_TO_SPACE_POD);
  });

  it('should update the state with vehicle Space rocket when type is VEHICLE_CHANGED', () => {
    expect(spacePodToSpaceRocketState()).toEqual(DESTINATIONS_SPACE_POD_TO_SPACE_ROCKET);
  });
});
