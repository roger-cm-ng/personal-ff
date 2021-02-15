import React, { useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { Planet, PlanetsProps } from './planets-types';
import { choosePlanet } from './planets-actions';
import { changePlanet } from '../destinations/destinations-actions';
import { findPlanet } from './planets-utils';
import css from './planets.scss';

const Planets = (props: PlanetsProps) => {
  const { ind } = props;
  const {
    planetsReducer,
    destinationsReducer
  } = useSelector((state: RootStateOrAny) => state);
  const [prevPlanet, setPrevPlanet] = useState('');
  const dispatch = useDispatch();

  const onChange = (val: string) => {
    dispatch(changePlanet({
      destination: ind,
      planet: findPlanet(val, planetsReducer)
    }));
    dispatch(choosePlanet([
      prevPlanet,
      val
    ]));
    setPrevPlanet(val);
  };

  return (
    <div className={css.planets}>
      <select
        onChange={(evt) => onChange(evt.target.value)}
        value={destinationsReducer[ind].planet.name}
      >
        <option
          key='Select'
          value=''
          disabled
        >
          Select
        </option>
        {
          planetsReducer.map((planet: Planet) => (
            (
              <option
                key={planet.name}
                value={planet.name}
                disabled={planet.isChosen}
              >
                {planet.name}
              </option>
            )
          ))
        }
      </select>
    </div>
  );
};

export default Planets;
