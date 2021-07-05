import AsyncStorage from '@react-native-community/async-storage';
import {ValueOfMin} from 'utils/constants';

const HAS_LAUNCHED_STORAGE_KEY = 'HAS_LAUNCHED';
const HAS_ONBOARDED_STORAGE_KEY = 'HAS_ONBOARDED';
const ADD_10TH_LIKED_MOVIE_STORAGE_KEY = 'ADD_10TH_LIKED_MOVIE_STORAGE_KEY';
const ADD_25TH_LIKED_MOVIE_STORAGE_KEY = 'ADD_25TH_LIKED_MOVIE_STORAGE_KEY';
const LIKE_DISLIKE_CLICK_STORAGE_KEY = 'LIKE_DISLIKE_CLICK_STORAGE_KEY';
const FORYOU_AUTO_REFRESH_15MIN = 'FORYOU_AUTO_REFRESH_15MIN';
const DISCOVER_AUTO_REFRESH_15MIN = 'DISCOVER_AUTO_REFRESH_15MIN';

const storeFirstLaunchData = async (value) => {
  try {
    await AsyncStorage.setItem(HAS_LAUNCHED_STORAGE_KEY, value);
  } catch (e) {
    // saving error
  }
};

const storeOnboardData = async (value) => {
  try {
    await AsyncStorage.setItem(HAS_ONBOARDED_STORAGE_KEY, value);
  } catch (e) {
    // saving error
  }
};

const checkIfFirstLaunch = async () => {
  try {
    const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED_STORAGE_KEY);
    if (hasLaunched === null) {
      storeFirstLaunchData('true');
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const userHasOnboarded = async () => {
  try {
    const value = await AsyncStorage.getItem(HAS_ONBOARDED_STORAGE_KEY);
    if (value !== null) {
      if (value === 'true') {
        return true;
      }
      return false;
    }
    return false;
  } catch (error) {
    return false;
  }
};
const store10ThAddLikedMovie = async (value) => {
  try {
    await AsyncStorage.setItem(ADD_10TH_LIKED_MOVIE_STORAGE_KEY, value);
  } catch (e) {
    // saving error
  }
};
const store25ThAddLikedMovie = async (value) => {
  try {
    await AsyncStorage.setItem(ADD_25TH_LIKED_MOVIE_STORAGE_KEY, value);
  } catch (e) {
    // saving error
  }
};
const checkIf10ThAddLikedMovie = async () => {
  try {
    const has10Th = await AsyncStorage.getItem(
      ADD_10TH_LIKED_MOVIE_STORAGE_KEY,
    );
    if (has10Th === null) {
      store10ThAddLikedMovie('true');
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
const checkIf25ThAddLikedMovie = async () => {
  try {
    const has25Th = await AsyncStorage.getItem(
      ADD_25TH_LIKED_MOVIE_STORAGE_KEY,
    );
    if (has25Th === null) {
      store25ThAddLikedMovie('true');
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
const storeFirstLikeDislikeClickData = async (value) => {
  try {
    await AsyncStorage.setItem(LIKE_DISLIKE_CLICK_STORAGE_KEY, value);
  } catch (e) {
    // saving error
  }
};
const checkIfFirstClickLikeDislike = async () => {
  try {
    const hasLaunched = await AsyncStorage.getItem(
      LIKE_DISLIKE_CLICK_STORAGE_KEY,
    );
    if (hasLaunched === null) {
      storeFirstLikeDislikeClickData('true');
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
const storeAutoRefreshTime = async (value) => {
  try {
    await AsyncStorage.setItem(FORYOU_AUTO_REFRESH_15MIN, value);
  } catch (e) {
    // saving error
  }
};
const checkIf15MinTime = async () => {
  try {
    const currentTime = new Date();
    const result = await AsyncStorage.getItem(FORYOU_AUTO_REFRESH_15MIN);
    if (result === null) {
      storeAutoRefreshTime(currentTime.toString());
      return false;
    }
    return get15MinTime(result);
  } catch (error) {
    return false;
  }
};
const storeDiscoverAutoRefreshTime = async (value) => {
  try {
    await AsyncStorage.setItem(DISCOVER_AUTO_REFRESH_15MIN, value);
  } catch (e) {
    // saving error
  }
};
const get15MinTime = (value) => {
  // console.log('*******get15MinTime**', value)
  const nowDateTime = new Date();
  const savedDateTime = new Date(value);
  const nowTime = nowDateTime.getHours() * 60 + nowDateTime.getMinutes();
  const savedTime = savedDateTime.getHours() * 60 + savedDateTime.getMinutes();
  const currentMin = nowTime - savedTime;
  // console.log('*******currentMin**', currentMin)
  if (currentMin !== null && currentMin >= ValueOfMin) {
    return true;
  }
  return false;
};
const checkDiscoverIf15MinTime = async () => {
  try {
    const currentTime = new Date();
    const result = await AsyncStorage.getItem(DISCOVER_AUTO_REFRESH_15MIN);
    if (result === null) {
      storeDiscoverAutoRefreshTime(currentTime.toString());
      return false;
    }
    return get15MinTime(result);
  } catch (error) {
    return false;
  }
};
// async function isFirstLaunch() {
//   try {
//     const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED_STORAGE_KEY);
//     if (hasLaunched === null) {
//       storeFirstLaunchData('true');
//       return true;
//     }
//     return false;
//   } catch (error) {
//     return false;
//   }
// }

// async function hasOnboarded() {
//   try {
//     const value = await AsyncStorage.getItem(HAS_ONBOARDED_STORAGE_KEY);
//     if (value !== null) {
//       if (value === 'true') return true;
//       return false;
//     }
//     return false;
//   } catch (error) {
//     return false;
//   }
// }

export {
  checkIfFirstLaunch,
  userHasOnboarded,
  storeOnboardData,
  store10ThAddLikedMovie,
  store25ThAddLikedMovie,
  checkIf10ThAddLikedMovie,
  checkIf25ThAddLikedMovie,
  checkIfFirstClickLikeDislike,
  checkIf15MinTime,
  storeAutoRefreshTime,
  storeDiscoverAutoRefreshTime,
  checkDiscoverIf15MinTime,
};
