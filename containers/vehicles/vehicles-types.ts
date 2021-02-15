export type VehicleServer = {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
};

export type VehiclesServer = VehicleServer[];

export type Vehicle = {
  name: string;
  total_no: number;
  max_distance: number;
  speed: number;
  capacity: boolean;
  usage: number;
};

export type VehiclesReducer = Vehicle[];

export type VehiclesProps = {
  ind: number;
};