import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {toggleTodo} from '../redux/actions';

const TodoList = ({todos, toggleTodo}) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
          <View
            style={{
              padding: 10,
              backgroundColor: item.completed ? 'lightgray' : 'white',
            }}>
            <Text>{item.text}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, {toggleTodo})(TodoList);

// components/AddTodo.js
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions';

const AddTodo = ({addTodo}) => {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
        placeholder="Enter Todo"
        value={todoText}
        onChangeText={text => setTodoText(text)}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

// export default connect(null, { addTodo })(AddTodo);
