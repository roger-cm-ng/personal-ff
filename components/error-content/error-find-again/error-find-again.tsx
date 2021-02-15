import React from 'react';
import { useDispatch } from 'react-redux';
import css from './error-find-again.scss';
import Button from '../../button/button';
// eslint-disable-next-line import/no-cycle
import { fetchToken } from '../../../containers/find/find-actions';
import { resetError } from '../../../containers/error-handler/error-handler-actions';

const ErrorFindAgain = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(fetchToken());
    dispatch(resetError());
  };

  return (
    <div
      className={css['error-find-again']}
    >
      <h1>Connection error!</h1>
      <h3>Retry finding Falcone again</h3>
      <Button
        className={css.button}
        callBack={onClick}
        text='Retry'
      />
    </div>
  );
};

export default ErrorFindAgain;
