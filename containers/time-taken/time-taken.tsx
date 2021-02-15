import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { calcDuration } from './time-taken-utils';
import { addTime } from './time-taken-actions';
import css from './time-taken.scss';

const TimeTaken = () => {
  const {
    destinationsReducer,
    timeTakenReducer
  } = useSelector((state: RootStateOrAny) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTime(calcDuration(destinationsReducer)));
  }, [destinationsReducer]);

  return (
    <h4 className={css['time-taken']}>
      Time taken:
      <span
        className={css.duration}
      >
        {` ${timeTakenReducer}`}
      </span>
    </h4>
  );
};

export default TimeTaken;
