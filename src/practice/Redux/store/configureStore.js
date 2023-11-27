import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
//import counterReducer from '../reducers/counterReducer';

import * as reducers from '../reducers';
const reducer = combineReducers(reducers);

// Passing counterReducer to createStore
const store = configureStore({
  reducer: reducer,
});
export default store;
