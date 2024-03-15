import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import ModalComponent from './ModalComponents';
import Comments from './Comments';
import Post from './Post';
import Profile from './Profile';
import HomeScreenContent from './HomeScreenContent';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      if (e.target && e.target.toLowerCase() === 'post') {
        openImagePicker();
      }
    });

    return unsubscribe;
  }, [navigation]);

  const openImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Handle the selected image (you can upload it, display it, etc.)
        Alert.alert('Image Selected', response.uri);
      }
    });
  };

  const handleSearch = () => {
    // Implement your search logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={
                focused
                  ? {
                      home: 'home',
                      post: 'add-circle',
                      comments: 'chatbubble',
                      profile: 'person',
                    }[route.name]
                  : {
                      home: 'home-outline',
                      post: 'add-circle-outline',
                      comments: 'chatbubble-outline',
                      profile: 'person-outline',
                    }[route.name]
              }
              size={size}
              color={color}
            />
          ),
        })}
        tabBarActiveTintColor="#0080ff"
        tabBarInactiveTintColor="gray"
      >
        <Tab.Screen name="home" component={HomeScreenContent} options={{ headerShown: false }} />
        <Tab.Screen name="post" component={Post} />
        <Tab.Screen name="comments" component={Comments} />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
    </View>
  );
};

// const HomeScreenContent = () => (
//   <View style={styles.tabContent}>
//     <Text>This is the "Home" tab content.</Text>
//   </View>
// );



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  tabContent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
  },
  searchButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Home;
