import {GET_BOOKS} from '../actions';

const initialState = {
  loggedIn: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, books: action.payload};
    default:
      return state;
  }
}

export default appReducer;
