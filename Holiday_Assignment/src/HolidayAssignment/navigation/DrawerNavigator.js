import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchBox from '../components/SearchBox'; // Import your SearchBox component
import Logout from '../screens/ScreenComponents/Logout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Search"
        component={SearchBox}
        options={{
          title: 'Search',
          drawerIcon: () => (
            <FontAwesome name="search" size={22} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: 'Logout',
          drawerIcon: () => (
            <FontAwesome name="sign-out" size={22} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
