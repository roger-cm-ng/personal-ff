export type PlanetServer = {
  name: string;
  distance: number;
};

export type PlanetsServer = PlanetServer[];

export type Planet = {
  name: string;
  distance: number;
  isChosen: boolean;
};

export type PlanetsReducer = Planet[] | [];

export type PlanetsProps = {
  ind: number;
};
