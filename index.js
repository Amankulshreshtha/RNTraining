/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import MainApp from './src/practice/MainApp';
import {name as appName} from './app.json';
import navigationApp from './src/Assignment_five/components/Navigation/navigationApp';

// import reduxApp from './src/practice/Redux/actions/reduxApp';
// import Todo from './src/Redux/components/Todo';
// import Async from './src/practice/AsyncStorage/AsyncStorage';
// import Appp from './src/Redux/actions/Appp';
AppRegistry.registerComponent(appName, () => navigationApp);
