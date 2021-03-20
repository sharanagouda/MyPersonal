import api from './queries';
import credentials from './credentials';

const logerror = api.logError;

export const logout = async () => {
  const { data, error } = await api.logout().catch((e) => {
    logerror(e)
  })
  // remove looged in users data from asyncstorage
  if (data.data.success === true) {
    await credentials.removeAuthData()
  }
  return { data, error };
}

export const updatePassword = async (params) => {
  const { data, error } = await api.updatePassword(params).catch((e) => {
    logerror(e)
  })
  return { data, error };
}

export const saveLoginData = async (params) => {
  const { data, error } = await api.saveLoginData(params).catch((e) => {
    logerror(e)
  })
  // store token and user data in asynstorage
  if (data.data.success === true) {
    await credentials.setAuthData(data.data.data, data.headers.authorization)
  }
  return { data, error };
}

export const emailRegister = async (params) => {
  const { data, error } = await api.emailHome(params).catch((e) => {
    logerror(e)
  })
  return { data, error };
}
export const mobileRegister = async (params) => {
  const { data, error } = await api.mobileHome(params).catch((e) => {
    logerror(e)
  })
  return { data, error };
}

export const emailRegistrationOtpVerification = async (params) => {
  const { data, error } = await api.emailRegistrationOtpVerification(params).catch((e) => {
    logerror(e)
  })
  // store token and user data in asynstorage
  if (data.data.success === true) {
    await credentials.setAuthData(data.data.data, data.headers.authorization)
  }
  return { data, error };
}

export const mobileRegistrationOtpVerification = async (params) => {
  const { data, error } = await api.mobileRegistrationOtpVerification(params).catch((e) => {
    logerror(e)
  })
  // store token and user data in asynstorage
  if (data.data.success === true) {
    await credentials.setAuthData(data.data.data, data.headers.authorization)
  }
  return { data, error };
}

export const emailLoginViaPassword = async (params) => {
  const { data, error } = await api.emailLoginViaPassword(params).catch((e) => {
    logerror(e)
  })
  // store token and user data in asynstorage
  if (data.data.success === true) {
    await credentials.setAuthData(data.data.data, data.headers.authorization)
  }
  return { data, error };
}

export const mobileLoginViaPassword = async (params) => {
  const { data, error } = await api.mobileLoginViaPassword(params).catch((e) => {
    logerror(e)
  })
  // store token and user data in asynstorage
  if (data.data.success === true) {
    await credentials.setAuthData(data.data.data, data.headers.authorization)
  }
  return { data, error };
}

export const emailGenerateOtp = async (params) => {
  const { data, error } = await api.emailGenerateOtp(params).catch((e) => {
    logerror(e)
  })
  return { data, error };
}

export const mobileGenerateOtp = async (params) => {
  const { data, error } = await api.mobileGenerateOtp(params).catch((e) => {
    logerror(e)
  })
  return { data, error };
}

export const emailLoginViaOtp = async (params) => {
  const { data, error } = await api.emailLoginViaOtp(params).catch((e) => {
    logerror(e)
  })
  // store token and user data in asynstorage
  if (data.data.success === true) {
    await credentials.setAuthData(data.data.data, data.headers.authorization)
  }
  return { data, error };
}

export const mobileLoginViaOtp = async (params) => {
  const { data, error } = await api.mobileLoginViaOtp(params).catch((e) => {
    logerror(e)
  })
  // store token and user data in asynstorage
  if (data.data.success === true) {
    await credentials.setAuthData(data.data.data, data.headers.authorization)
  }
  return { data, error };
}

export const setPassword = async (params) => {
  const { data, error } = await api.setPassword(params).catch((e) => {
    logerror(e)
  })
  return { data, error };
}

export const mobileForgotPasswordVerifyOtp = async (params) => {
  const { data, error } = await api.mobileForgotPasswordVerifyOtp(params).catch((e) => {
    logerror(e)
  })
  // store token and user data in asynstorage
  if (data.data.success === true) {
    await credentials.setAuthData(data.data.data, data.headers.authorization)
  }
  return { data, error };
}

export const emailForgotPasswordVerifyOtp = async (params) => {
  const { data, error } = await api.emailForgotPasswordVerifyOtp(params).catch((e) => {
    logerror(e)
  })
  // store token and user data in asynstorage
  if (data.data.success === true) {
    await credentials.setAuthData(data.data.data, data.headers.authorization)
  }
  return { data, error };
}

export const authenticateAppleId = async (params) => {
  const { data, error } = await api.authenticateAppleId(params).catch((e) => {
    logerror(e)
  })
  // store token and user data in asynstorage
  if (data && data.data.success === true) {
    await credentials.setAuthData(data.data.data, data.headers.authorization)
  }
  return { data, error };
}
