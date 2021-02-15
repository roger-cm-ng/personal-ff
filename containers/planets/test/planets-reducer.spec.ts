import planetsReducer from '../planets-reducer';
import { PLANETS_FETCHED, PLANET_CHOSEN } from './../planets-actions';
import {
  PLANETS_MOCK,
  PLANET_EMPTY_DONLON_MOCK,
  PLANET_EMPTY_ENCHAI_MOCK,
  PLANET_DONLON_EMPTY_MOCK,
  PLANET_ENCHAI_LERBIN_MOCK
} from './planets-mock-data';

describe('planets reducer', () => {
  const initialState = () => planetsReducer([], {
    type: PLANETS_FETCHED,
    payload: []
  });

  const acquiredState = () => planetsReducer(initialState(), {
    type: PLANETS_FETCHED,
    payload: PLANETS_MOCK
  });

  const emptyDonlonState = () => planetsReducer(acquiredState(), {
    type: PLANET_CHOSEN,
    planet: ['', 'Donlon']
  });

  const emptyEnchaiState = () => planetsReducer(emptyDonlonState(), {
    type: PLANET_CHOSEN,
    planet: ['', 'Enchai']
  });

  const donlonEmptyState = () => planetsReducer(emptyEnchaiState(), {
    type: PLANET_CHOSEN,
    planet: ['Donlon', '']
  });

  const enchaiLerbinState = () => planetsReducer(donlonEmptyState(), {
    type: PLANET_CHOSEN,
    planet: ['Enchai', 'Lerbin']
  });

  it('should return initial state', () => {
    expect(initialState()).toHaveLength(0);
  });

  it('should update the state with acquired data when type is PLANETS_FETCHED', () => {
    expect(acquiredState()).toMatchSnapshot();
    expect(acquiredState()).toEqual(PLANETS_MOCK);
  });

  it('should update the state with planet from empty to Donlon', () => {
    expect(emptyDonlonState()).toEqual(PLANET_EMPTY_DONLON_MOCK);
  });

  it('should update the state with planet from empty to Enchai', () => {
    expect(emptyEnchaiState()).toEqual(PLANET_EMPTY_ENCHAI_MOCK);
  });

  it('should update the state with planet from Donlon to empty', () => {
    expect(donlonEmptyState()).toEqual(PLANET_DONLON_EMPTY_MOCK);
  });

  it('should update the state with planet from Enchai to Lerbin', () => {
    expect(enchaiLerbinState()).toEqual(PLANET_ENCHAI_LERBIN_MOCK);
  });
});
