import {createStore} from 'redux';
import todoReducer from '../reducre/todoReducrer';

const store = createStore(todoReducer);

export default store;
