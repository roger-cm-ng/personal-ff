import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  VEHICLES_FETCHED,
  fetchVehicles  
} from '../vehicles-actions';
import {
  ERROR_RAISED
} from '../../error-handler/error-handler-actions';
import { inject } from '../vehicles-utils';
import { VEHICLES } from './vehicles-mock-data';
import ErrorRestart from '../../../components/error-content/error-restart/error-restart';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

describe('vehicles actions', () => {
  const store = mockStore({ vehiclesReducer: {} });

  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches VEHICLES_FETCHED when response status is 200', async () => {
    const expectedActions = [
      {
        type: VEHICLES_FETCHED,
        payload: inject(VEHICLES)
      }
    ];

    axios.get.mockResolvedValue({
      data: VEHICLES,
      status: 200
    });

    await store.dispatch(fetchVehicles());
    expect(store.getActions()).toEqual(expectedActions);
  })

  it('dispatches ERROR_RAISED when response status is 500', async () => {
    const expectedActions = [
      {
        type: ERROR_RAISED,
        component: ErrorRestart
      }
    ];

    axios.get.mockResolvedValue({
      status: 500
    });

    await store.dispatch(fetchVehicles());
    expect(store.getActions()).toEqual(expectedActions);
  })

  it('dispatches ERROR_RAISED when response is null', async () => {
    const expectedActions = [
      {
        type: ERROR_RAISED,
        component: ErrorRestart
      }
    ];

    axios.get.mockResolvedValue(null);

    await store.dispatch(fetchVehicles());
    expect(store.getActions()).toEqual(expectedActions);
  })
});