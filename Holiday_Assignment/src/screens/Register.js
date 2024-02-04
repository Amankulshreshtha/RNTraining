// Register.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/actions';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    dispatch(registerUser(firstName, lastName, email));
    navigation.navigate('Login');
  };
  const handleSign_in = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerHeading}>
        <Text style={styles.register}>Register</Text>
        <View style={styles.register}>
          <Text style={styles.registerText}>Create your account</Text>
        </View>
      </View>
      <View style={styles.containerRegister}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.inputText}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>
          <View>
            <Text style={styles.inputText}>Last Name or Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <View>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />
          </View>
        </View>
      </View>
      <View style={styles.registerContainer}>
        <View style={styles.registerButton}>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.pressableRegister}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles. AlreadyhaveAccountHead}>
        <Text style ={styles.AlreadyhaveAccount}>Already have an account</Text>
        <TouchableOpacity onPress={handleSign_in}>
          <Text style = {styles.AlreadyhaveAccountSign_in}>  Sign in</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  containerRegister: {
    flex: 0.5,
    justifyContent: 'space-around',
  },
  register: {},
  registerText: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
  containerHeading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerContainer: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flex: 0.7,
  },
  input: {
    backgroundColor: '#F2F2F2',
    fontSize: 18,
    borderRadius: 20,
    paddingLeft: 20,
    borderWidth: 1,
  },
  registerButton: {
    backgroundColor: 'blue',
    width: '100%',
    borderRadius: 20,
    marginBottom: 15,
  },
  pressableRegister: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputText: {
    fontSize: 18,
    color: 'black',
  },
  AlreadyhaveAccount: {
    color: 'black',
  },
  AlreadyhaveAccountSign_in:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  AlreadyhaveAccountHead:{
    flexDirection: 'row'
  }
});

export default Register;
