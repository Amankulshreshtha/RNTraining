import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {onUserLogout} from '../../actions/userAction';
export const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.authReducer?.current_user);

  const handleLogout = () => {
    dispatch(onUserLogout(navigation));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50, color: '#001965'}}>Current User</Text>
          <Text>Name : {currentUser?.name}</Text>
          <Text>Mobile : {currentUser?.mobile}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.btn}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
  },

  headerContainer: {
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  title: {
    color: '#001965',
    fontSize: 40,
    fontWeight: 'bold',
  },

  loginContainer: {
    // gap:20,
    flex: 0.6,
    // backgroundColor: 'pink',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'space-around',
  },

  // textinputContainer:{
  //     alignSelf:'center',
  //     width:350,
  //     alignItems:'center',
  // },

  inputEmail: {
    fontSize: 16,
    borderRadius: 20,
    height: 50,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
    paddingLeft: 10,
  },

  inputPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 7,
    borderRadius: 20,
    height: 50,
    backgroundColor: '#F5F5F5',
    paddingRight: 10,
  },

  eyeLogo: {
    top: 15,
    // right: 20,
  },

  btn: {
    backgroundColor: '#001965',
    borderRadius: 20,
  },
});
