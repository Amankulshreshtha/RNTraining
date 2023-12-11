/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import MainApp from './src/practice/MainApp';
import {name as appName} from './app.json';
// import navigationApp from './src/Assignment_five/screens/Navigation/navigationApp';
// import MainApp from './src/src2/screen/App 1';
// import UserHobbies from './src/userHobbies';
// import staticUserHobbies from './src/staticUserHobbies';

// import UserHobbies from './src/userHobbies';

// import UserHobbies from './src/UserHobbies/UserHobbies';
// import Hobbies from "./src/Aman'sHobbies/Hobbies";
import PharmaData from './Assignment-6/src/Health-Care/MainScreen/PharmacyData';
AppRegistry.registerComponent(appName, () => PharmaData);
