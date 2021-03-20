import React, { createContext, useReducer } from 'react';
import * as api from './routes';
import credentials from './credentials';
import actions from '../webstore/actions';

const HTSSOContext = createContext({});

const initialState = {
  loading: false,
  navigateTo: ''
}

const htssoReducer = (state, action) => {
  switch (action.type) {
    case actions.INITIATE_SIGN_IN_OR_REGISTER:
      return {
        ...state,
        loading: true
      }
    case actions.ON_SUCCESS_SIGN_IN_OR_REGISTER:
      return {
        ...state,
        loading: false
      }
    case actions.ON_FAILURE_SIGN_IN_OR_REGISTER:
      return {
        ...state,
        loading: false
      }
    case actions.INITIATE_SSO_SIGNIN:
      return {
        ...state,
        loading: true
      }
    case actions.ON_SUCCESS_SSO_SIGNIN:
      return {
        ...state,
        loading: false
      }
    case actions.ON_FAILURE_SSO_SIGNIN:
      return {
        ...state,
        loading: false
      }
    case actions.INITIATE_FORGOT_PASSWORD:
      return {
        ...state,
        loading: true

      }
    case actions.ON_SUCCESS_FORGOT_PASSWORD:
      return {
        ...state,
        loading: false
      }
    case actions.ON_FAILURE_FORGOT_PASSWORD:
      return {
        ...state,
        loading: false
      }
    case actions.INITIATE_SSO_LOGOUT:
      return {
        ...state,
        loading: true

      }
    case actions.ON_SUCCESS_SSO_LOGOUT:
      return {
        ...state,
        loading: false
      }
    case actions.ON_FAILURE_SSO_LOGOUT:
      return {
        ...state,
        loading: false
      }
    case actions.INITIATE_GENERATE_OTP:
      return {
        ...state,
        loading: true
      }
    case actions.ON_SUCCESS_GENERATE_OTP:
      return {
        ...state,
        loading: false
      }
    case actions.ON_FAILURE_GENERATE_OTP:
      return {
        ...state,
        loading: false
      }
    case actions.INITIATE_VERIFY_OTP:
      return {
        ...state,
        loading: true
      }
    case actions.ON_SUCCESS_OTP_VERIFICATION:
      return {
        ...state,
        loading: false
      }
    case actions.ON_FAILURE_OTP_VERIFICATION:
      return {
        ...state,
        loading: false
      }
    case actions.INITIATE_CREATE_PASSWORD:
      return {
        ...state,
        loading: true
      }
    case actions.ON_SUCCESS_CREATE_PASSWORD:
      return {
        ...state,
        loading: false
      }
    case actions.ON_FAILURE_CREATE_PASSWORD:
      return {
        ...state,
        loading: false
      }
    case actions.INITIATE_RESET_PASSWORD:
      return {
        ...state,
        loading: true
      }
    case actions.ON_SUCCESS_RESET_PASSWORD:
      return {
        ...state,
        loading: false
      }
    case actions.ON_FAILURE_RESET_PASSWORD:
      return {
        ...state,
        loading: false
      }
    case actions.NAVIGATE_TO:
      return {
        ...state,
        navigateTo: action.payload
      }
    default:
      return state;
  }
};

export const createAction = (type, payload) => ({
  type,
  payload,
});

const HTSSOProvider = ({ children }) => {
  const [state, dispatch] = useReducer(htssoReducer, initialState);
  const actionDispatch = (type, payload) => dispatch(createAction(type, payload));

  return (
    <HTSSOContext.Provider
      value={{
        api,
        ssoStore: state,
        credentials,
        ssoActionDispatch: actionDispatch,
        actions
      }}
    >
      {children}
    </HTSSOContext.Provider>
  );
};

export { HTSSOContext, HTSSOProvider };
