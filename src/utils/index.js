import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useContext,
} from 'react';
// Export all
import * as Typography from '../theme/typography';
import * as Scale from './scale';
import * as helper from './helper';
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
const colors = {
  PRIMARY_COLOR: '#ff304f',
  SECONDARY_COLOR: '#002651',
  BORDER_COLOR: '#dbdbdb',
};

export {
  Scale,
  Typography,
  helper,
  storeFirstLaunchData,
  storeOnboardData,
  checkIfFirstLaunch,
  userHasOnboarded,
  colors,
};
