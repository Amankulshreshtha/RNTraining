import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, POSTDATA, FETCH_COMMENTS, STORE_OWNERS_ID, PROFILE } from './types';
import { userReducer } from '../reducer';

const BASE_URL = 'https://dummyapi.io/data/v1/';
const API_KEY = '659d663b3089b3d68c223c8d';


export const persistUserData = (userData) => {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log("userData", userData);
    } catch (error) {
      console.error('Error persisting user data:', error);
      throw error;
    }
  };
};

export const registerUser = (firstName, lastName, email) => {
  return async (dispatch, getState) => {
    try {
      const existingUser = getState().userReducer.user.find((user) => user.email === email);

      if (existingUser) {
        dispatch(updateUserData(existingUser.id, { firstName, lastName, email }));
      } else {
        const response = await axios.post(
          `${BASE_URL}user/create`,
          {
            firstName,
            lastName,
            email,
            id: '360d0fe4f5311236168a109ca',
          },
          {
            headers: {
              'app-id': API_KEY,
            },
          }
        );

        dispatch({
          type: REGISTER_USER,
          payload: response.data,
        });

        dispatch(persistUserData(response.data));
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.error('User with the provided email already exists.');
      } else {
        console.error('Error registering user:', error);
        throw error;
      }
    }
  };
};

const updateUserData = (userId, updatedData) => {
  return {
    type: UPDATE_USER_DATA,
    payload: { userId, updatedData },
  };
};




export const loginUser = (email) => {
  return async (dispatch) => {
    try {
      const userData = await AsyncStorage.getItem('userData');

      if (userData) {
        const owner = JSON.parse(userData);

        if (owner.email === email) {
          dispatch({
            type: LOGIN_USER,
            payload: owner,
          });

          console.log('Logged in as:', owner);
        } 
        else {
          throw new Error('User not registered');
        }
      } else {
        throw new Error('No user data found');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };
};

export const postData = (image, ownerId) => {
  return async (dispatch) => {
    try {
      const requestData = {
        image,
        owner: ownerId,
      };

      const response = await axios.post(
        `${BASE_URL}post/create`,
        requestData,
        {
          headers: {
            'app-id': API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Post Response:', response);

      dispatch({
        type: POSTDATA,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error posting image:', error);
      throw error;
    }
  };
};

export const postComment = (postId, commentText) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}post/${postId}/comment/create`,
        {
          comment: commentText,
        },
        {
          headers: {
            'app-id': API_KEY,
          },
        }
      );

      dispatch({
        type: FETCH_COMMENTS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error posting comment:', error);
      throw error;
    }
  };
};


export const ProfileData = () => {
  return async (dispatch) => {
    try {
      const userData = await AsyncStorage.getItem('userData');

      if (userData) {
        const user = JSON.parse(userData);

        const userDetailsResponse = await axios.get(
          `${BASE_URL}user/${user.id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'app-id': API_KEY,
            },
          }
        );

        const userPostsResponse = await axios.get(
          `${BASE_URL}user/${user.id}/post`,
          {
            headers: {
              'Content-Type': 'application/json',
              'app-id': API_KEY,
            },
          }
        );

        if (userDetailsResponse.status === 200 && userPostsResponse.status === 200) {
          dispatch({
            type: PROFILE,
            payload: userDetailsResponse.data,
          });

          dispatch({
            type: POSTDATA,
            payload: userPostsResponse.data,
          });

          console.log('Profile Details:', userDetailsResponse.data);
          console.log('User Posts:', userPostsResponse.data);
        } else {
          throw new Error('Error fetching profile details or user posts');
        }
      } else {
        throw new Error('No user data found');
      }
    } catch (error) {
      console.error('Error fetching profile details or user posts:', error);
      throw error;
    }
  };
};

