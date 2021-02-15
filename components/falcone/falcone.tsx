import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Destinations from '../../containers/destinations/destinations';
import { fetchPlanets } from '../../containers/planets/planets-actions';
import { fetchVehicles } from '../../containers/vehicles/vehicles-actions';
import TimeTaken from '../../containers/time-taken/time-taken';
import Find from '../../containers/find/find';
import css from './falcone.scss';

const Falcone = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlanets());
    dispatch(fetchVehicles());
  }, []);

  return (
    <div
      className={css.falcone}
    >
      <p>Select the planets you want to search in</p>
      <Destinations />
      <TimeTaken />
      <Find />
    </div>
  );
};

export default Falcone;
