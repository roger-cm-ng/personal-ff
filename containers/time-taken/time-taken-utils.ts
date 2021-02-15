import { DestinationsReducer, Destination } from '../destinations/destinations-types';

export const calcDuration = (destinationsReducer: DestinationsReducer) => {
  const durationArr: number[] = [];
  let duration = 0;
  destinationsReducer.forEach((dest: Destination) => {
    durationArr.push(dest.vehicle.speed === 0
      ? 0
      : (dest.planet.distance / dest.vehicle.speed));
  });
  durationArr.forEach((time) => {
    duration += time;
  });
  return duration;
};
