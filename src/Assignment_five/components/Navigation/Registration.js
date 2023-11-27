import React from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import {ADD_USER} from '../../Actions/actiontypes';
import {setPassword} from '../../Actions/RgistrationAction';

export default function Registration({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.allUsers);
  console.log(user);
  const handleRegistration = () => {
    if (
      !user.firstName ||
      !user.secondName ||
      !user.contactNumber ||
      !user.email ||
      !user.password
    ) {
      alert('Please fill in all the required fields');
      return;
    }
    const LogInData = () => {
      const dispatch = useDispatch();

      const usersData = () => {
        dispatch(logIn_User(usersData));
      };
    };

    dispatch({
      type: ADD_USER,
      payload: {
        firstName: user.firstName,
        secondName: user.secondName,
        contactNumber: user.contactNumber,
        email: user.email,
        password: user.password,
      },
    });

    navigation.navigate('LogIN');
  };

  return (
    <View style={styles.main}>
      <Text style={styles.Text}> REGISTRATION PAGE</Text>
      <Text style={styles.UserText}>First Name</Text>
      <TextInput
        style={styles.UserInputs}
        placeholder="Enter Your First Name"
        value={user.firstName}
        onChangeText={name => dispatch({type: 'SET_FIRST_NAME', payload: name})}
      />
      <Text style={styles.UserText}>Last Name</Text>
      <TextInput
        style={styles.UserInputs}
        placeholder="Enter Your Last Name"
        value={user.secondName}
        onChangeText={lastName =>
          dispatch({type: 'SET_SECOND_NAME', payload: lastName})
        }
      />
      <Text style={styles.UserText}>Contact Number</Text>
      <TextInput
        style={styles.UserInputs}
        placeholder="Enter Your Contact Number"
        value={user.contactNumber}
        onChangeText={number =>
          dispatch({type: 'SET_CONTACT_NUMBER', payload: number})
        }
      />
      <Text style={styles.UserText}> Email </Text>
      <TextInput
        style={styles.UserInputs}
        placeholder="Enter Your Email"
        value={user.email}
        onChangeText={userEmail =>
          dispatch({type: 'SET_EMAIL', payload: userEmail})
        }
      />
      <Text style={styles.UserText}> Your Password </Text>

      <TextInput
        style={styles.UserInputs}
        placeholder="Enter Your Password"
        value={user.password}
        onChangeText={password => dispatch(setPassword(password))}
      />
      <View style={styles.checkBox}>
        <TouchableOpacity onPress={() => dispatch({type: 'TOGGLE_CHECKBOX'})}>
          <Icon
            name={user.checked ? 'checksquare-fill' : 'checksquareo'}
            // name="checked"
            color="black"
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.checktext}>Check</Text>
      </View>
      <Button title="Sign-Up" onPress={handleRegistration} />
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  UserInputs: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 3,
  },

  main: {
    justifyContent: 'space-evenly',
    flex: 1,
    paddingHorizontal: 20,
  },
  UserText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  checktext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
