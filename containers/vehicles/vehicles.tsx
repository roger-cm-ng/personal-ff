import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Vehicle, VehiclesProps } from './vehicles-types';
import { changeVehicle } from '../destinations/destinations-actions';
import css from './vehicles.scss';

const Vehicles = (props: VehiclesProps) => {
  const { ind } = props;
  const {
    destinationsReducer
  } = useSelector((state: RootStateOrAny) => state);
  const dispatch = useDispatch();

  const [prevVehicle, setPrevVehicle] = useState('');

  const onChange = (val: string, vehicle: Vehicle) => {
    dispatch(changeVehicle({
      destination: ind,
      prevVehicle,
      currentVehicle: vehicle
    }));
    setPrevVehicle(val);
  };

  return (
    <>
      {
        destinationsReducer[ind].planet.name.length > 0
        && destinationsReducer[ind].vehiclesInstance.map((vehicle: Vehicle) => (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            key={vehicle.name}
            className={css.vehicles}
          >
            <input
              type='radio'
              value={vehicle.name}
              name={`vehicle${ind}`}
              checked={destinationsReducer[ind].vehicle.name === vehicle.name}
              onChange={(evt) => onChange(evt.target.value, vehicle)}
              disabled={
                (destinationsReducer[ind].planet.distance > vehicle.max_distance)
                || (vehicle.total_no - vehicle.usage === 0)
              }
            />
            <span
              className={classNames(
                destinationsReducer[ind].vehicle.name === vehicle.name && css.checked,
                ((destinationsReducer[ind].planet.distance > vehicle.max_distance)
                || (vehicle.total_no - vehicle.usage === 0)) && css.disabled
              )}
            >
              {` ${vehicle.name} (${vehicle.total_no - vehicle.usage})`}
            </span>
          </label>
        ))
      }
    </>
  );
};

export default Vehicles;
