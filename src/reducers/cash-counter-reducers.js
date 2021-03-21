import {ADD_CASH_COUNTER_DATA_TO_LIST} from '../actions/action-types';
import initialState from './initialize';

function cashCounterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CASH_COUNTER_DATA_TO_LIST:
      return {
        ...state,
        cashCounter: {
          ...state.cashCounter,
          loading: false,
          data: [...state.cashCounter.data, action.payload],
        },
      };
    default:
      return state;
  }
}

export default cashCounterReducer;
