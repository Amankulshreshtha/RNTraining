import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook

const Logout = () => {
  const navigation = useNavigation(); // Initialize navigation object

  const handleLogout = () => {
    console.log('Logout successful');
    navigation.navigate('Login'); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Logout Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default Logout;
