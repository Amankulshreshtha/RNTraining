/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import MainApp from './MainApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainApp);
