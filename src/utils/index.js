import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useContext,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

const HAS_LAUNCHED_STORAGE_KEY = 'HAS_LAUNCHED';
const HAS_ONBOARDED_STORAGE_KEY = 'HAS_ONBOARDED';

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

export {
  storeFirstLaunchData,
  storeOnboardData,
  checkIfFirstLaunch,
  userHasOnboarded,
};
