import ssoapi from './initialize';
import credentials from './credentials'

// async function throwAnError() {
//   throw new Error('Oops!');
// }

// Add a request interceptor to set the Auth Token
ssoapi.interceptors.request.use(async (config) => {
  if (config.url !== '/v3/authenticateAppleId') {
    const token = await credentials.getAuthToken()
    config.headers.Authorization = token ? `${token}` : ''
  }
  config.headers['X-Client'] = 1004;
  // config.Accept = '*/*'

  // console.log('Config....', config)

  return config;
}, (error) => Promise.reject(error));

// eslint-disable-next-line no-unused-vars
const logError = (error) => {
  // eslint-disable-next-line no-console
  // console.log('system error: ', error);
  // return 42;
};

const exec = async (fn, params) => {
  const res = {
    data: null,
    error: null,
    syserror: null,
  };

  const response = await fn(params).catch((e) => {
    logError(e);
    res.error = e;
    res.syserror = e;
  });
  res.data = response;

  return res;
};

const logout = () => exec(() => ssoapi.post('/v3/logout'));

// to save Google/Facebook logged in user data in HTSSO
const saveLoginData = (params) => exec(() => ssoapi.post('/v3/save', params));

// Register/Signin initial api call
const emailHome = (params) => exec(() => ssoapi.post('/v3/email/home', params));

const mobileHome = (params) => exec(() => ssoapi.post('/v3/mobile/home', params));

// otp verification for register flow
const emailRegistrationOtpVerification = (params) => exec(() => ssoapi.post('/v3/email/registration/verifyOtp',
  params));
const mobileRegistrationOtpVerification = (params) => exec(() => ssoapi.post('/v3/mobile/registration/verifyOtp',
  params));

// Login
const emailLoginViaPassword = (params) => exec(() => ssoapi.post('/v3/email/login/viaPassword',
  params));

const mobileLoginViaPassword = (params) => exec(() => ssoapi.post('/v3/mobile/login/viaPassword',
  params));

const emailLoginViaOtp = (params) => exec(() => ssoapi
  .post('/v3/email/login/viaOtp', params));

const mobileLoginViaOtp = (params) => exec(() => ssoapi
  .post('/v3/mobile/login/viaOtp', params));

// generate OTP for Login/Forgot Password flow
const emailGenerateOtp = (params) => exec(() => ssoapi
  .post('/v3/email/generateOtp',
    params));
const mobileGenerateOtp = (params) => exec(() => ssoapi
  .post('/v3/mobile/generateOtp', params));

// verify OTP for Forgot Password flow
const mobileForgotPasswordVerifyOtp = (params) => exec(() => ssoapi
  .post('/v3/mobile/forgotPassword/verifyOtp', params));

const emailForgotPasswordVerifyOtp = (params) => exec(() => ssoapi
  .post('/v3/email/forgotPassword/verifyOtp', params));
// // generate OTP for Login/Forgot Password flow
// const emailVerifyOtpForLoggedInUser = (params) => exec(() => ssoapi
//   .post('/v3/email/loggedinUser/verifyOtp', params));

// const mobileVerifyOtpForLoggedInUser = (params) => exec(() => ssoapi
//   .post('/v3/mobile/loggedinUser/verifyOtp', params));

// Create password
const setPassword = (params) => exec(() => ssoapi
  .post('/v3/setPassword', params));

// Reset password
const updatePassword = (params) => exec(() => ssoapi
  .post('/v3/updatePassword', params));

const authenticateAppleId = (param) => exec(() => ssoapi
  .get('/v3/authenticateAppleId', {
    headers: {
      Authorization: `${credentials.REFERRER}-${param}`
    }
  }));

export default {
  logError,
  logout,
  saveLoginData,
  emailHome,
  mobileHome,
  emailRegistrationOtpVerification,
  mobileRegistrationOtpVerification,
  emailLoginViaPassword,
  mobileLoginViaPassword,
  emailGenerateOtp,
  mobileGenerateOtp,
  emailLoginViaOtp,
  mobileLoginViaOtp,
  setPassword,
  mobileForgotPasswordVerifyOtp,
  emailForgotPasswordVerifyOtp,
  updatePassword,
  authenticateAppleId
};
