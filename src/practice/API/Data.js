import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Todos from './todo_component';
import Posts from './posts_components';

const Drawer = createDrawerNavigator();

function Data() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Todos"
          component={Todos}
          options={{drawerLabel: 'Updates'}}
        />
        <Drawer.Screen
          name="Posts"
          component={Posts}
          options={{drawerLabel: 'Posts'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Data;

const styles = StyleSheet.create({
  
});
