import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logIn_User} from '../../Actions/RgistrationAction';

export default function LogInScreen() {
  const navigation = useNavigation();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [loginIdError, setLoginIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch(); // Fixed: added parentheses
  const user = useSelector(state => state.allUsers.users);

  useEffect(() => {
    rememberCridiantial();
  }, []);

  const rememberCridiantial = async () => {
    try {
      const storedCredentials = await AsyncStorage.getItem('credentials');

      if (storedCredentials) {
        const {rememberedLoginId, rememberedPassword} =
          JSON.parse(storedCredentials);
        setLoginId(rememberedLoginId);
        setPassword(rememberedPassword);
        setRememberMe(true);
      }
    } catch (error) {
      console.error('Error loading remembered credentials:', error);
    }
  };

  const handleLogin = () => {
    if (!loginId) {
      setLoginIdError('Please enter your Login ID');
      return;
    } else {
      setLoginIdError('');
    }

    if (!password) {
      setPasswordError('Please enter your Password');
      return;
    } else {
      setPasswordError('');
    }

    if (rememberMe) {
      storeRememberedCredentials();
    }

    const usersData = user.filter(
      userData => loginId === userData.email && password === userData.password,
    );

    if (usersData.length > 0) {
      navigation.navigate('Homes');
      // dispatch(logIn_User(usersData[0].email, usersData[0].password)); // Assuming usersData is an array
      console.log(usersData);
    } else {
      Alert.alert('Invalid user');
    }
  };

  const storeRememberedCredentials = async () => {
    try {
      const credentials = JSON.stringify({
        rememberedLoginId: loginId,
        rememberedPassword: password,
      });
      await AsyncStorage.setItem('credentials', credentials);
    } catch (error) {
      console.error('Error storing remembered credentials:', error);
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.LoginText}>Log-In</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.innput}
          placeholder="Enter your Login-ID"
          value={loginId}
          onChangeText={text => setLoginId(text)}
        />
        {loginIdError ? (
          <Text style={styles.errorText}>{loginIdError}</Text>
        ) : null}

        <TextInput
          style={styles.innput}
          placeholder="Enter your Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
      </View>

      <View style={styles.checkBox}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <Icon
            name={rememberMe ? 'checksquare' : 'checksquareo'}
            color="black"
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.checktext}>REMEMBER ME</Text>
      </View>
      <View style={styles.Loginheader}>
        <View style={styles.LoginButton}>
          <Button title="Log-In" onPress={handleLogin} />
        </View>
        <View style={styles.LoginButton2}>
          <Button
            title="Sign-Up"
            onPress={() => navigation.navigate('Registeration')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginText: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'blue',
  },
  LoginButton2: {
    borderRadius: 20,
    width: 75,
    alignSelf: 'center',
    color: 'black',
  },
  LoginButton: {
    borderRadius: 20,
    width: 200,
    alignSelf: 'center',
  },
  Loginheader: {
    gap: 20,
    marginTop: 10,
  },
  inputContainer: {
    padding: 10,
  },
  innput: {
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    padding: 10,
    borderColor: 'orange',
    borderWidth: 3,
    margin: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 5,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  checktext: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});
