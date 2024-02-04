/* eslint-disable jsx-quotes */
// Welcome.js
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const Welcome = ({navigation}) => {

 const handleContinuebutton = () =>{
    navigation.navigate('Home');
 }
  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/welcome_Image.jpg')} 
        style={styles.image}
        resizeMode='contain'
      />
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.continue_Button}>
          <Pressable onPress={handleContinuebutton}>
            <Text style={styles.PressableContinue}>Continue</Text>
          </Pressable>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.35,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  PressableContinue: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  continue_Button:{
    backgroundColor: '#1C6758',
    width: '80%',
    borderRadius: 20,
    marginBottom: 15,
  },
});

export default Welcome;
