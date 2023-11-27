import {combineReducers} from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  allUsers: userReducer,
});

export default rootReducer;
