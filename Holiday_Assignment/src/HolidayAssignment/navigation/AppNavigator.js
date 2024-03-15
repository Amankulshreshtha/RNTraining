/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Home from '../screens/MainScreens/Home';
import Welcome from '../screens/Welcome';
import ForgotPassword from '../screens/ScreenComponents/ForgotPassword';
import Update_Profile from '../screens/MainScreens/updateProfile';
import {useDispatch, useSelector} from 'react-redux';
import Comments from '../screens/MainScreens/Comments';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const myApp = useSelector(state => state.userReducer.loginUser);
  console.log('App Navigation', myApp);

  return (
    <NavigationContainer>
      {myApp ? (
        
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Welcome" component={Welcome} />
         <Stack.Screen name= "Home" component={Home}   />
         <Stack.Screen name= "ForgotPassword" component={ForgotPassword} />
         <Stack.Screen name= "Update_Profile" component={Update_Profile} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default AppNavigator;
