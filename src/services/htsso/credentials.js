import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

const AUTH_DATA_STORAGE_KEY = 'AUTH_DATA_STORAGE_KEY';

const getAuthToken = async () => {
  const authData = await AsyncStorage.getItem(AUTH_DATA_STORAGE_KEY);
  if (authData !== null) {
    return JSON.parse(authData).authToken
  }
  return ''
}
const getClientID = async () => {
  const authData = await AsyncStorage.getItem(AUTH_DATA_STORAGE_KEY);
  if (authData !== null) {
    return JSON.parse(authData).authData.clientId
  }
  return ''
}

const getAuthData = async () => {
  const authData = await AsyncStorage.getItem(AUTH_DATA_STORAGE_KEY);
  if (authData !== null) {
    return JSON.stringify(authData)
  }
  return {}
}

const removeAuthData = async () => {
  await AsyncStorage.removeItem(AUTH_DATA_STORAGE_KEY);
}

const setAuthData = async (data, token = '') => {
  await AsyncStorage.setItem(AUTH_DATA_STORAGE_KEY, JSON.stringify({
    authData: data,
    authToken: token
  }))
  // console.log(' Set Auth Data....', data, token)
}

const REFERRER = Config.SSO_REFERRER

const SOURCE_TYPE = {
  FACEBOOK: 'F',
  GMAIL: 'G',
  APPLE: 'A',
  SELF: 'S'
}

const OTP_FOR = {
  FORGOT_PASSWORD: 'FORGET_PASSWORD',
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGN_UP'
}

const SSO_FLOW = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD'
}

export default {
  getAuthToken,
  setAuthData,
  getAuthData,
  getClientID,
  removeAuthData,
  REFERRER,
  SOURCE_TYPE,
  OTP_FOR,
  SSO_FLOW
};
