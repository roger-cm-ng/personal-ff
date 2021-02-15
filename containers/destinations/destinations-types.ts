import { VehiclesReducer, Vehicle } from '../vehicles/vehicles-types';
import { Planet } from '../planets/planets-types';

export type Destination = {
  planet: Planet;
  vehicle: Vehicle;
  vehiclesInstance: VehiclesReducer;
};

export type DestinationsReducer = Destination[] | [];

export type DestPlan = {
  destination: number;
  planet: Planet;
};

export type DestVehi = {
  destination: number;
  prevVehical: string;
  currentVehicle: Vehicle;
};