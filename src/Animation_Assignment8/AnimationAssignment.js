import {StyleSheet, Text, View, TouchableOpacity, Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {TextInput, Image, Animated} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function AnimationAssignment() {
  const searchAnimation = useRef(new Animated.Value(0)).current;
  const micAnimation = useRef(new Animated.Value(1)).current;
  const offerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(searchAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(searchAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      {iterations: -1},
    ).start();

    Animated.loop(
      Animated.timing(offerAnimation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      {iterations: -1},
    ).start();
  }, []);

  const handleMic = () => {
    Animated.sequence([
      Animated.timing(micAnimation, {
        toValue: 1.3,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(micAnimation, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    console.log('Mic clicked');
  };

  const handleSearch = () => {
    console.log('Search clicked');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Animated.View
          style={[
            styles.iconContainer,
            {transform: [{scale: searchAnimation}]},
          ]}>
          <TouchableOpacity onPress={handleSearch}>
            <Feather name="search" size={24} color="red" style={styles.icon} />
          </TouchableOpacity>
        </Animated.View>
        <TextInput
          placeholder="Restaurant name or a dish... "
          placeholderTextColor={'#000000'}
          style={styles.SearchInput}
        />
        <Animated.View
          style={[styles.iconContainer, {transform: [{scale: micAnimation}]}]}>
          <TouchableOpacity onPress={handleMic}>
            <Feather name="mic" size={24} color="red" style={styles.icon} />
          </TouchableOpacity>
        </Animated.View>
      </View>

      <View style={styles.MiddleContainer}>
        <Animated.Image
          source={require('./Image/discount.png')}
          style={[
            styles.image,
            {
              transform: [
                {
                  rotate: offerAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        />

        <Text style={styles.offers}>Offers</Text>
        <Text style={styles.Discounts}>Flat Discounts</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.2,
    padding: 2,
    margin: 5,
  },
  SearchInput: {
    flex: 1,
  },
  iconContainer: {
    marginRight: 5,
  },
  MiddleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  offers: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  Discounts: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e90ff',
  },
  image: {
    height: 100,
    width: 100,
  },
});
