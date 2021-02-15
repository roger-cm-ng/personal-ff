import { Vehicle, VehiclesServer } from './vehicles-types';

export const inject = (vehicles: VehiclesServer) => vehicles.map((vehicle: Vehicle) => {
  vehicle.capacity = true;
  vehicle.usage = 0;
  return vehicle;
});
