import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../actions/todoActionTypes';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {...todo, completed: !todo.completed}
            : todo,
        ),
      };

    case REMOVE_TODO:
      console.log(action.payload, state.todos);
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.newText,
            };
          }
          // If the todo's id doesn't match, keep it unchanged
          return todo;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
