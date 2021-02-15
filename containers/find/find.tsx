import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';
import _get from 'lodash/get';
import { fetchToken, findFalcone } from './find-actions';
import { checkReadyToLaunch, constructBody } from './find-utils';
import Button from '../../components/button/button';
import css from './find.scss';

const Find = () => {
  const dispatch = useDispatch();
  const { destinationsReducer, tokenReducer, findReducer } = useSelector((state: RootStateOrAny) => state);
  const [readyToLaunch, setReadyToLaunch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setReadyToLaunch(checkReadyToLaunch(destinationsReducer));
  }, [destinationsReducer]);

  useEffect(() => {
    if (tokenReducer !== null) {
      dispatch(findFalcone(constructBody(tokenReducer, destinationsReducer)));
    }
  }, [tokenReducer]);

  useEffect(() => {
    if (_get(findReducer, 'status')) {
      history.push('/results');
    }
  }, [findReducer]);

  const onClick = () => {
    dispatch(fetchToken());
  };

  return (
    <div className={css.find}>
      <Button
        text='Find Falcone!'
        callBack={onClick}
        disabled={!readyToLaunch}
      />
    </div>
  );
};

export default Find;
