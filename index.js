/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
// import PharmaData from './PharmacyData';
// import map from './src/Map/map';
// import Login from './src/Login/Login';
import App from './App';
// import Loginin from './src/Loginin';
// import RegisterType from './RegisterType';
// import SignIn from './googleSignIN/SignIn';
// import FacebookSignIn from './SignIn/FacebookSignIn';
// import SIGNIN from './SignIn/Login';
AppRegistry.registerComponent(appName, () => App);
