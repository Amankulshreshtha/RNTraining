import React from 'react';
import {View, Text, Button} from 'react-native';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux'; // Import useSelector from react-redux

export default function HomeScreen({route}) {
  const navigation = useNavigation();

  // Assuming you have a reducer named 'userReducer' and a slice named 'allUsers'
  const user = useSelector(state => state.allUsers);
  console.log(user);
  return (
    <View>
      <View style={styles.main}>
        <Text style={styles.welcomeTag}>WELCOME</Text>
        <Text style={styles.name_text}>{user.firstName}</Text>
        <Text style={styles.name_mobile}>{user.secondName}</Text>
        <Text style={styles.name_Email}>{user.email}</Text>
        <Text style={styles.name_mobile}>{user.contactNumber}</Text>
      </View>
      <View style={styles.logout}>
        <Button title="Log-Out" onPress={() => navigation.navigate('LogIN')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },

  name_text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  name_Email: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  name_mobile: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  Gender_text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcomeTag: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
