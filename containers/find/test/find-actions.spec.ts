import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  TOKEN_FETCHED,
  FALCONE_FOUND,
  fetchToken,
  findFalcone
} from '../find-actions';
import {
  ERROR_RAISED
} from '../../error-handler/error-handler-actions';
import {
  TOKEN,
  FALCONE_FOUND_SUCCESS,
  FALCONE_FOUND_FAILURE
} from './find-mock-data';
import ErrorFindAgain from '../../../components/error-content/error-find-again/error-find-again';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

describe('find actions - fetch token', () => {
  const store = mockStore({ tokenReducer: {} });

  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches TOKEN_FETCHED when response status is 200', async () => {
    const expectedActions = [
      {
        type: TOKEN_FETCHED,
        payload: TOKEN
      }
    ];

    axios.post.mockResolvedValue({
      data: TOKEN,
      status: 200
    });

    await store.dispatch(fetchToken());
    expect(store.getActions()).toEqual(expectedActions);
  })

  it('dispatches ERROR_RAISED when response status is 500', async () => {
    const expectedActions = [
      {
        type: ERROR_RAISED,
        component: ErrorFindAgain
      }
    ];

    axios.post.mockResolvedValue({
      status: 500
    });

    await store.dispatch(fetchToken());
    expect(store.getActions()).toEqual(expectedActions);
  })

  it('dispatches ERROR_RAISED when response is null', async () => {
    const expectedActions = [
      {
        type: ERROR_RAISED,
        component: ErrorFindAgain
      }
    ];

    axios.post.mockResolvedValue(null);

    await store.dispatch(fetchToken());
    expect(store.getActions()).toEqual(expectedActions);
  })
});

describe('find actions - find falcone', () => {
  const store = mockStore({ findReducer: {} });

  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches FALCONE_FOUND when response status is 200 with success data', async () => {
    const expectedActions = [
      {
        type: FALCONE_FOUND,
        payload: FALCONE_FOUND_SUCCESS
      }
    ];

    axios.post.mockResolvedValue({
      data: FALCONE_FOUND_SUCCESS,
      status: 200
    });

    await store.dispatch(findFalcone());
    expect(store.getActions()).toEqual(expectedActions);
  })

  it('dispatches FALCONE_FOUND when response status is 200 with failure data', async () => {
    const expectedActions = [
      {
        type: FALCONE_FOUND,
        payload: FALCONE_FOUND_FAILURE
      }
    ];

    axios.post.mockResolvedValue({
      data: FALCONE_FOUND_FAILURE,
      status: 200
    });

    await store.dispatch(findFalcone());
    expect(store.getActions()).toEqual(expectedActions);
  })

  it('dispatches ERROR_RAISED when response status is 500', async () => {
    const expectedActions = [
      {
        type: ERROR_RAISED,
        component: ErrorFindAgain
      }
    ];

    axios.post.mockResolvedValue({
      status: 500
    });

    await store.dispatch(fetchToken());
    expect(store.getActions()).toEqual(expectedActions);
  })

  it('dispatches ERROR_RAISED when response is null', async () => {
    const expectedActions = [
      {
        type: ERROR_RAISED,
        component: ErrorFindAgain
      }
    ];

    axios.post.mockResolvedValue(null);

    await store.dispatch(fetchToken());
    expect(store.getActions()).toEqual(expectedActions);
  })
});