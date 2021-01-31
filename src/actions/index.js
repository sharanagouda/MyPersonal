import axios from 'axios';

import {BASE_URL} from '../config/constants';
import {
  GET_BOOKS,
  ADD_TO_BOOKMARK_LIST,
  REMOVE_FROM_BOOKMARK_LIST,
  SELECT_BOOK,
} from '../actions/action-types';
// Define action creators

export const getBooks = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`${BASE_URL}?_limit=100`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_BOOKS,
          payload: response.data,
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const getSelectedBookDetails = (value) => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`${BASE_URL}?id=${value}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: SELECT_BOOK,
          payload: response.data[0],
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const addBookmark = (book) => (dispatch) => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book,
  });
};

export const removeBookmark = (book) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book,
  });
};
