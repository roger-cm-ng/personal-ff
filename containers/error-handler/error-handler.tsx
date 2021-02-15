import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import css from './error-handler.scss';

const ErrorHandler = () => {
  const { errorHandlerReducer } = useSelector((state: RootStateOrAny) => state);

  return (
    <>
      {
        errorHandlerReducer && (
          <div
            className={css['error-handler']}
          >
            <div
              className={css.modal}
            >
              <errorHandlerReducer.component />
            </div>
          </div>
        )
      }
    </>
  );
};

export default ErrorHandler;
