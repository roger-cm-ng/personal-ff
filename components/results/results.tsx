import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import TimeTaken from '../../containers/time-taken/time-taken';
import Button from '../button/button';
import css from './results.scss';

const Results = () => {
  const { findReducer } = useSelector((state: RootStateOrAny) => state);

  const onClick = () => {
    window.open('#BASE_URL#', '_self');
  };

  return (
    <div className={css.results}>
      {
        findReducer.status === 'success' ? (
          <>
            <h1>Success! Congratulations on finding Falcone.</h1>
            <h2>King Shan is mighty pleased</h2>
            <TimeTaken />
            <h4>
              Planet found:
              <span
                className={css['planet-name']}
              >
                {` ${findReducer.planet_name}`}
              </span>
            </h4>
          </>
        ) : (
          <>
            <h1>Unsuccessful! Falcone is still at large.</h1>
            <h2>King Shan is extremely angry</h2>
            <TimeTaken />
          </>
        )
      }
      <div className={css.btn}>
        <Button
          text='Start again'
          callBack={onClick}
        />
      </div>
    </div>
  );
};

export default Results;
