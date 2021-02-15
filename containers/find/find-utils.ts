import { Destination, DestinationsReducer } from '../destinations/destinations-types';
import { Token } from './find-types';

export const checkReadyToLaunch = (destinationsReducer: DestinationsReducer) => {
  const targetNum = destinationsReducer.length * 2;
  let count = 0;

  destinationsReducer.forEach((dest: Destination) => {
    if (dest.planet.name.length > 0) {
      count += 1;
    }
    if (dest.vehicle.name.length > 0) {
      count += 1;
    }
  });

  return count === targetNum || false;
};

export const constructBody = (tokenReducer: Token, destinationsReducer: DestinationsReducer) => {
  const planets: string[] = [];
  const vehicles: string[] = [];

  destinationsReducer.forEach((dest: Destination) => {
    planets.push(dest.planet.name);
    vehicles.push(dest.vehicle.name);
  });

  return {
    token: tokenReducer.token,
    planet_names: planets,
    vehicle_names: vehicles
  };
};
