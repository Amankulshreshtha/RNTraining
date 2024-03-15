import React from 'react';
import {Provider} from 'react-redux';
// import {store} from './src/redux/store/configureStore';
import { store } from './src/HolidayAssignment/redux/store/configureStore';
// import AppNavigator from '../src/navigation/AppNavigator';
import AppNavigator from './src/HolidayAssignment/navigation/AppNavigator';
// import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
