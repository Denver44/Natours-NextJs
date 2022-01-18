import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import exampleSaga from './example/saga';
import loginSaga from './auth/saga';
import rootReducer, { RootState } from './reducer';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    if (Object.keys(state.form).length > 0) {
      nextState.form = state.form;
    }

    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export const makeStore: MakeStore<RootState> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(exampleSaga);
  store.sagaTask = sagaMiddleware.run(loginSaga);

  return store;
};

export const wrapper = createWrapper<RootState>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
