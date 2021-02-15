import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { constructDestinations } from './destinations-actions';
import { Destination } from './destinations-types';
import Planets from '../planets/planets';
import Vehicles from '../vehicles/vehicles';
import css from './destinations.scss';

const Destinations = () => {
  const [numDestinations] = useState(4);
  const [initialLoad, setInitialLoad] = useState(true);
  const {
    planetsReducer,
    vehiclesReducer,
    destinationsReducer
  } = useSelector((state: RootStateOrAny) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (planetsReducer.length > 0 && vehiclesReducer.length > 0 && initialLoad) {
      dispatch(constructDestinations(
        numDestinations,
        vehiclesReducer
      ));
      setInitialLoad(false);
    }
  }, [planetsReducer, vehiclesReducer]);

  return (
    <div
      className={css.destinations}
    >
      {
        destinationsReducer.map((des: Destination, ind: number) => (
          <div
            key={des.vehiclesInstance[ind].name}
            className={css.destination}
          >
            <Planets ind={ind} />
            <Vehicles ind={ind} />
          </div>
        ))
      }
    </div>
  );
};

export default Destinations;
