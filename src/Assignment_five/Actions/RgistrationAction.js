import {
  SET_FIRST_NAME,
  SET_SECOND_NAME,
  SET_CONTACT_NUMBER,
  SET_EMAIL,
  SET_PASSWORD,
  LOGIN_USER,
} from './actiontypes';

export const setFirstName = text => ({
  type: SET_FIRST_NAME,
  payload: text,
});

export const setSecondName = text => ({
  type: SET_SECOND_NAME,
  payload: text,
});

export const setContactNumber = number => ({
  type: SET_CONTACT_NUMBER,
  payload: number,
});

export const setEmail = email => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPassword = password => ({
  type: SET_PASSWORD,
  payload: password,
});
export const logIn_User = logIn_User => ({
  type: LOGIN_USER,
  payload: (email, password),
});
