import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import HomeScreen from './Homes';
import {store, persistor} from '../../UserStore,js/store';
import Registration from './Registration';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'; // Import PersistGate
import LogInScreen from './LogIn';

const Stack = createNativeStackNavigator();

function NavigationApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LogIN">
            <Stack.Screen
              name="Registeration"
              component={Registration}
              options={{
                headerStyle: {
                  backgroundColor: 'skyblue',
                },
              }}
            />
            <Stack.Screen
              name="Homes"
              component={HomeScreen}
              options={{
                headerStyle: {
                  backgroundColor: 'red',
                },
              }}
            />
            <Stack.Screen
              name="LogIN"
              component={LogInScreen}
              options={{
                headerStyle: {
                  backgroundColor: 'red',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default NavigationApp;
