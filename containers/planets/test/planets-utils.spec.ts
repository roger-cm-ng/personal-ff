import { inject, findPlanet } from '../planets-utils';
import { PLANETS, PLANETS_MOCK, SAPIR } from './planets-mock-data';

describe('planets utils - inject', () => {
  it('should inject isChosen key in each planet item', () => {
    expect(inject(PLANETS)).toEqual(PLANETS_MOCK);
  })
});

describe('planets utils - find planet', () => {
  it('should find Sapir data with Sapir name', () => {
    expect(findPlanet('Sapir', PLANETS_MOCK)).toEqual(SAPIR);
  })
});