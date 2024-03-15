// Secure.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/actions/actions';
import Login from '../Login';

const ForgotPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const [uName, setUName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    const values = { uName, password, confirmPassword };
    console.log(values);
    navigation.navigate('Login');
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    // For now, let's just show an alert
    Alert.alert('Forgot Password clicked');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <Text style={styles.head1Text}>Forgot Password</Text>
        <Text style={styles.head2Text}>Let's help recover your account</Text>
      </View>

      <View style={styles.subContainer2}>
        <Text style={styles.inputText}>Username</Text>
        <TextInput
          style={styles.textInput1}
          onChangeText={setUName}
          value={uName}
        />

        <Text style={styles.inputText}>Password</Text>
        <TextInput
          style={styles.textInput2}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <Text style={styles.inputText}>Confirm Password</Text>
        <TextInput
          style={styles.textInput2}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={handleSubmit}
        >
          <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.signInText}>
          Already have an account?
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signInLink}>Sign In</Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },

  subContainer1: {
    flex: 0.15,
    justifyContent: 'center',
  },

  head1Text: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000',
  },

  head2Text: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
  },

  subContainer2: {
    flex: 0.5,
  },

  inputText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
    marginBottom: 5,
  },

  textInput1: {
    width: '100%',
    borderRadius: 10,
    borderColor: '#006175',
    color: '#000000',
    borderWidth: 1,
  },

  textInput2: {
    width: '100%',
    borderRadius: 10,
    borderColor: 'grey',
    color: '#000000',
    borderWidth: 0.2,
    backgroundColor: '#F2F2F2',
  },

  btn: {
    width: '100%',
    height: '10%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#1C6758',
    marginTop: 20,
  },

  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },

  bottomContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signInText: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#000000',
    fontSize: 14,
  },

  signInLink: {
    fontWeight: '700',
    textDecorationLine: 'underline',
    color: '#000000',
  },

  forgotPasswordText: {
    color: 'blue',
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default ForgotPassword;
