import { combineReducers } from 'redux';
import planetsReducer from '../planets/planets-reducer';
import vehiclesReducer from '../vehicles/vehicles-reducer';
import destinationsReducer from '../destinations/destinations-reducer';
import findReducer from '../find/find-reducer';
import tokenReducer from '../find/token-reducer';
import timeTakenReducer from '../time-taken/time-taken-reducer';
import errorHandlerReducer from '../error-handler/error-handler-reducer';

const CombinedReducers = combineReducers({
  planetsReducer,
  vehiclesReducer,
  destinationsReducer,
  findReducer,
  tokenReducer,
  timeTakenReducer,
  errorHandlerReducer
});

export default CombinedReducers;
