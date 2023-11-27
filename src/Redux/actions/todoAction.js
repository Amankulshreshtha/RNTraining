import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO} from './todoActionTypes';

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    payload: index,
  };
};

export const removeTodo = taskId => {
  return {
    type: REMOVE_TODO,
    payload: taskId,
  };
};

export const editTodo = (taskId, index) => {
  return {
    type: EDIT_TODO,
    payload: index,
  };
};
