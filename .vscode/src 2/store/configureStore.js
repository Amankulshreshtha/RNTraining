import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
//import counterReducer from '../reducers/counterReducer';

import * as reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
};

//const reducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, reducer);

// Passing counterReducer to createStore
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(logger),
});

const persistor = persistStore(store);
// export default store;

export {store, persistor};
