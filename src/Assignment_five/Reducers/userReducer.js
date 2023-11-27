// userReducer.js

import {
  SET_FIRST_NAME,
  SET_SECOND_NAME,
  SET_CONTACT_NUMBER,
  SET_EMAIL,
  ADD_USER,
  SET_PASSWORD,
  LOG_IN_USER, // Changed action type
} from '../Actions/actiontypes';

const initialState = {
  users: [],
  firstName: '',
  secondName: '',
  contactNumber: '',
  email: '',
  checked: false,
  password: '',
  logIn_User: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return {...state, firstName: action.payload};

    case SET_SECOND_NAME:
      return {...state, secondName: action.payload};

    case SET_CONTACT_NUMBER:
      return {...state, contactNumber: action.payload};

    case SET_EMAIL:
      return {...state, email: action.payload};

    case SET_PASSWORD:
      return {...state, password: action.payload};

    case LOG_IN_USER: // Changed action type
      return {...state, logIn_User: action.payload};

    case ADD_USER:
      const newUser = {
        firstName: state.firstName,
        secondName: state.secondName,
        contactNumber: state.contactNumber,
        email: state.email,
        password: state.password,
        checked: state.checked,
        logIn_User: state.logIn_User,
      };
      return {...state, users: [...state.users, newUser]};

    default:
      return state;
  }
};

export default userReducer;
