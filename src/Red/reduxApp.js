import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const reduxAppp = () => {
  return (
    <Provider store={store}>
      <View style={{padding: 20}}>
        <AddTodo />
        <TodoList />
      </View>
    </Provider>
  );
};

export default reduxAppp;
