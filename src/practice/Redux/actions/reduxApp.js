import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReduxDemo} from '../screen/reduxDemo/ReduxDemo';
import {Provider} from 'react-redux';
import store from '../store/configureStore';

export default function reduxApp() {
  return (
    <Provider store={store}>
      <ReduxDemo />
    </Provider>
  );
}

const styles = StyleSheet.create({});
