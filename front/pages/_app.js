/* eslint-disable react/forbid-prop-types */
// @ts-nocheck
/* eslint-disable no-underscore-dangle */
import React from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

const VanillaTalk = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Vanilla-Talk!</title>
      </Head>
      <Component />
    </Provider>
  );
};

VanillaTalk.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
        );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(VanillaTalk);
