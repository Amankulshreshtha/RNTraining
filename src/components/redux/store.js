import {configureStore} from '@reduxjs/toolkit';
import rootReducre from './rootReducre';
const store = configureStore({
  reducer: rootReducre,
});

export default store;
