import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../styles/core.scss';
import CombinedReducers from './combined-reducers';
import Falcone from '../../components/falcone/falcone';
import Results from '../../components/results/results';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ErrorHandler from '../error-handler/error-handler';

export const App = (elm: string): void => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  const store = createStoreWithMiddleware(
    CombinedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : (f: any) => f
  );
  ReactDOM.render(
    <Provider
      store={store}
    >
      <ErrorHandler />
      <BrowserRouter>
        <Route path='/' render={() => <Header />} />
        <Route exact path='/' render={() => <Falcone />} />
        <Route exact path='/results' render={() => <Results />} />
        <Route path='/' render={() => <Footer />} />
      </BrowserRouter>
    </Provider>, document.querySelector(elm)
  );
};

window.App = App;
