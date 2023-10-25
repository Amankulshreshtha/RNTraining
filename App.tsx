/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  // const TextInput = () => {
  //   const [email, setEmail] = React.useState(' ');

  return (
    <View
      style={{
        justifyContent: 'space-between',
        flex: 1,
        padding: 20,
      }}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <Text style={{color: 'blue', fontSize: 30, fontWeight: 'bold'}}>
          BIOHACKER
        </Text>
      </View>

      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'blue', fontSize: 40}}>Login</Text>
          <Text> Login To Your Account</Text>
        </View>
        <View
          style={{
            borderColor: 'black',
            backgroundColor: 'lightgrey',
            margin: 20,
          }}>
          <TextInput
            style={{fontSize: 20, padding: 10}}
            placeholder="Enter your Email"></TextInput>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: 'lightgrey',
            }}>
            <TextInput
              style={{
                fontSize: 20,
                padding: 10,
                flex: 0.9,
              }}
              placeholder="Enter your PassWord"></TextInput>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                alignItems: 'center',
                flex: 0.1,
              }}>
              <Image resizeMode="contain" source={require('./Image/eye.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignSelf: 'flex-end', marginHorizontal: 18}}>
          <Text style={{color: 'green'}}>Forget Password</Text>
        </View>
      </View>
      <View style={{justifyContent: 'space-between', flex: 0.2}}>
        <View>
          <Button title="Login" onPress={() => Alert.alert('Thank you')} />
        </View>
        <View>
          <Text style={{color: 'black', textAlign: 'center'}}>
            If you don't have an account?
          </Text>
        </View>
      </View>
    </View>
  );
}

export default App;
