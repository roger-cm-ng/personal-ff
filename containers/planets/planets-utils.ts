import { Planet, PlanetsReducer, PlanetsServer } from './planets-types';

export const inject = (planets: PlanetsServer) => planets.map((planet: Planet) => {
  planet.isChosen = false;
  return planet;
});

export const findPlanet = (planet: string, planets: PlanetsReducer) => {
  let planetData: Planet;
  planets.forEach((item: Planet) => {
    if (planet === item.name) {
      planetData = item;
    }
  });
  return planetData;
};
