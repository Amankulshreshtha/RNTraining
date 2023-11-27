import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Todo from '../components/Todo';
import store from '../store/store';

export default function Appp() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
