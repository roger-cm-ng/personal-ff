import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  PLANETS_FETCHED,
  fetchPlanets  
} from '../planets-actions';
import {
  ERROR_RAISED
} from '../../error-handler/error-handler-actions'
import { inject } from '../planets-utils';
import { PLANETS } from './planets-mock-data';
import ErrorRestart from '../../../components/error-content/error-restart/error-restart';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

describe('planets actions', () => {
  const store = mockStore({ planetsReducer: {} });

  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches PLANETS_FETCHED when response status is 200', async () => {
    const expectedActions = [
      {
        type: PLANETS_FETCHED,
        payload: inject(PLANETS)
      }
    ];

    axios.get.mockResolvedValue({
      data: PLANETS,
      status: 200
    });

    await store.dispatch(fetchPlanets());
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

    await store.dispatch(fetchPlanets());
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

    await store.dispatch(fetchPlanets());
    expect(store.getActions()).toEqual(expectedActions);
  })
});