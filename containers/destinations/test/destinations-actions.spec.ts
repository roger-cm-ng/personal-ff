import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  DESTINATIONS_CONSTRUCTED,
  constructDestinations
} from '../destinations-actions';
import { DESTINATIONS_INIT } from './destinations-mock-data';
import { VEHICLES_MOCK } from '../../vehicles/test/vehicles-mock-data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('destinations actions', () => {
  const store = mockStore({ destinationsReducer: {} });

  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches DESTINATIONS_CONSTRUCTED', () => {
    const expectedActions = [
      {
        type: DESTINATIONS_CONSTRUCTED,
        payload: DESTINATIONS_INIT
      }
    ];

    store.dispatch(constructDestinations(4, VEHICLES_MOCK));

    expect(store.getActions()).toEqual(expectedActions);
  })
});