import tokenReducer from '../token-reducer';
import { TOKEN_FETCHED } from './../find-actions';
import { TOKEN } from './find-mock-data';

describe('token reducer', () => {
  const initialState = () => tokenReducer(null, {
    type: TOKEN_FETCHED,
    payload: null
  });

  const acquiredState = () => tokenReducer(initialState(), {
    type: TOKEN_FETCHED,
    payload: TOKEN
  });

  it('should return initial state', () => {
    expect(initialState()).toEqual(null);
  });

  it('should update the state with acquired data when type is TOKEN_FETCHED', () => {
    expect(acquiredState()).toMatchSnapshot();
    expect(acquiredState()).toEqual(TOKEN);
  });
});