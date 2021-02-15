import React from 'react';
import css from './error-restart.scss';
import Button from '../../button/button';

const ErrorRestart = () => {
  const onClick = () => {
    window.open('#BASE_URL#', '_self');
  };

  return (
    <div
      className={css['error-restart']}
    >
      <h1>Connection error!</h1>
      <h3>Restart Finding Falcone</h3>
      <Button
        className={css.button}
        callBack={onClick}
        text='Restart'
      />
    </div>
  );
};

export default ErrorRestart;
