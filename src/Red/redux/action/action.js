export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    id: new Date().getTime(),
    text,
    completed: false,
  },
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: id,
});
