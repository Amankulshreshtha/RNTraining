import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo, toggleTodo, editTodo} from '../actions/todoAction';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  TextInput,
  Pressable,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Todo = () => {
  const dispatch = useDispatch();
  const todosData = useSelector(state => state.todos);
  const [task, setTask] = useState('');
  const [newTask, setNewTask] = useState([]);
  console.log('todosData', todosData);

  const addTask = () => {
    dispatch(addTodo(task));
    if (task) {
      // setNewTask([...newTask, {text: task, completed: false}]);
      setTask('');
    } else {
      Alert.alert('Please enter a task');
    }
  };

  const toggleTask = index => {
    dispatch(toggleTodo(index));
  };

  const removeTask = id => {
    dispatch(removeTodo(id));
  };

  const editTodo = id => {
    dispatch(editTodo(id));
  };

  const renderTask = ({item, index}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 25,
      }}>
      <Text>{item.text}</Text>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          margin: 5,
        }}>
        <TouchableOpacity onPress={() => removeTask(item.id)}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            <Icon name="delete" size={30} color="red" />
            {/* DELETE */}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => editTodo(item.id)}>
          <Icon name="pen" color="black" size={25}></Icon>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1.5,
            padding: 2,
            borderColor: 'green',
            borderStyle: 'dotted',
          }}
          onPress={() => toggleTask(item.id)}
          disabled={item.completed}>
          {/* <Text style={[item.completed ? {color: 'green'} : {color: 'red'}]}>
            {item.completed ? 'COMPLETED' : 'COMPLETE'}
          </Text> */}
          {item.completed ? (
            <Icon name="close" size={25} color="green" />
          ) : (
            <Icon name="check" size={25} color="green" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        // backgroundColor: 'black'
      }}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          backgroundColor: 'grey',
          borderRadius: 20,
          borderWidth: 4,
          marginBottom: 10,
        }}>
        TODO LIST
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
          placeholder="Enter a task..."
          value={task}
          onChangeText={text => setTask(text)}
          style={{
            flex: 0.8,
            borderColor: 'gray',
            borderWidth: 2,
            fontSize: 20,
          }}
        />
        <Pressable
          style={{
            flex: 0.15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey',
            color: 'white',
            borderWidth: 1,
            borderRadius: 10,
          }}
          onPress={addTask}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>GO</Text>
        </Pressable>
      </View>

      <View style={{}}>
        <FlatList
          style={{
            // backgroundColor: 'yellow',
            borderRadius: 20,
            marginTop: 10,
            padding: 10,
          }}
          data={todosData.todos}
          renderItem={renderTask}
          keyExtractor={(item, index) => index.toString()}></FlatList>
      </View>
    </View>
  );
};

export default Todo;
