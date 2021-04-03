import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { verifyUser } from '../actions';

const reduxStore = (initialState) => {
  let store;
  let composeEnhancer = compose;
  const isClient = typeof window !== 'undefined';
  if (isClient) {
    if (process.env.ENV === 'development') {
      composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }
    const { persistReducer, persistStore } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'root',
      storage,
    };
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      composeEnhancer(applyMiddleware(thunk))
    );
    store.PERSISTOR = persistStore(store);
    store.dispatch(verifyUser());
    return store;
  }
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
};
export const wrapper = createWrapper(reduxStore);
