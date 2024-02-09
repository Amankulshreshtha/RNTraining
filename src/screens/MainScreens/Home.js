import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Logout from '../ScreenComponents/Logout';
import ImagePicker from 'react-native-image-picker';
import ModalComponent from './ModalComponents';
import Comments from './Comments';
import Post from './Post';
import Profile from './Profile';
import HomeScreenContent from './HomeScreenContent';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SearchFeed from '../ScreenComponents/SearchFeed';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeDrawer"
        component={TabNavigator}
        options={{
          title: 'Home',

          drawerIcon: () => <Ionicons name="home" size={22} color="black" />,
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

      {/* <Drawer.Screen
        name="Search"
        component={SearchFeed}
        options={{
          title: 'Search',
          drawerIcon: () => (
            <FontAwesome name="search" size={22} color="black" />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Post') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Comments') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0080ff',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenContent}
        options={{headerShown: false}}
      />

      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Comments" component={Comments} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Home;
