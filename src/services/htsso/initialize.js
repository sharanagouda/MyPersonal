import axios from 'axios';
import Config from 'react-native-config';

// import credentials from './credentials';

// const getToken = async () => credentials.getAuthToken()

const headers = {
  'Content-Type': 'application/json',
//   Authorization: getToken()
};

const webfoxConfig = {
  baseURL: Config.SSO_API_URL,
  timeout: 10000,
  responseType: 'json',
  headers
};

export default axios.create(webfoxConfig);
