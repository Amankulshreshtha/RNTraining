/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import PharmaData from './PharmacyData';
AppRegistry.registerComponent(appName, () => PharmaData);
