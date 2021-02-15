import axios from 'axios';
import { PlanetsReducer } from '../containers/planets/planets-types';
import { VehiclesReducer } from '../containers/vehicles/vehicles-types';
import {
  Token, FindError, FindSuccess, FindFailure, FindBody
} from '../containers/find/find-types';

export const getPlanets = () => axios.get<PlanetsReducer>('#API_URL#planets');
export const getVehicles = () => axios.get<VehiclesReducer>('#API_URL#vehicles');
export const postToken = () => axios.post<Token>('#API_URL#token', {});
export const postFind = (body: FindBody) => axios
  .post<FindError | FindSuccess | FindFailure>('#API_URL#find', body);
