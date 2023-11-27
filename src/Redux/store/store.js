import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import reducers from '../reducers';

const store = createStore(reducers);
// const store = configureStore({
//     reducer: {
//         todos: todoReducer,
//     },
// });

export default store;
