// Login.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ForgotPassword from './ScreenComponents/ForgotPassword';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const registeredUser = useSelector((state) => state.userReducer.user);

  console.log("register_user =", registeredUser);
  useEffect(() => {
    const retrieveUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const { email } = JSON.parse(userData);
          setEmail(email);
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }
    };

    retrieveUserData();
  }, []);

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

 const handleLogin = async () => {
  if (!registeredUser || !registeredUser.length) {
    Alert.alert('User data not loaded');
    return;
  }

  const user = { email, password };

  const isValidUser = registeredUser.some((registered) => {
    return user.email === registered.email && user.password === registered.lastName;
  });
  

  if (isValidUser) {
    // Login successful
    dispatch(loginUser(email));
    navigation.navigate('Welcome');
  } else {
    Alert.alert('Invalid email or password');
  };
};

  

  return (
    <View style={styles.main_container}>
      <View style={styles.containerHeading}>
        <Text style={styles.SignIN}>Sign In</Text>
        <View style={styles.login}>
          <Text style={styles.login_text}>Enter your credentials</Text>
        </View>
      </View>
      <View style={styles.containerLogin}>
        <View style={styles.email_container}>
          <View>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.email}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              style={styles.email}
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholder="Enter your last name"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.login_container}>
        <View style={styles.login_btn}>
          <Pressable onPress={handleLogin}>
            <Text style={styles.pressableLogin}>DONE</Text>
          </Pressable>
        </View>
        <View style={styles.signUp_container}>
          <Text style={styles.act_signup}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUp}>SignUp</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  containerLogin: {
    flex: 0.5,
    justifyContent: 'space-around',
  },
  login: {},
  login_text: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
  SignIN: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
  },
  email_container: {
    flex: 0.7,
  },
  email: {
    backgroundColor: '#F2F2F2',
    fontSize: 18,
    borderRadius: 20,
    paddingLeft: 20,
    borderWidth: 1,
  },
  login_container: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  login_btn: {
    backgroundColor: '#1C6758',
    width: '100%',
    borderRadius: 20,
    marginBottom: 15,
  },
  signUp_container: {},
  act_signup: {
    fontSize: 16,
  },
  signUp: {
    color: 'blue',
    fontSize: 16,
  },
  pressableLogin: {
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
  forgotPasswordContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: 'blue',
    fontSize: 14,
  },
});

export default Login;
