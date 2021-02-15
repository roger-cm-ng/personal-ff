import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './button-types';
import css from './button.scss';

const Button = (props: ButtonProps) => {
  const {
    text,
    callBack,
    disabled,
    className
  } = props;

  return (
    <button
      className={classNames(
        css.button,
        className
      )}
      type='button'
      onClick={callBack}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
