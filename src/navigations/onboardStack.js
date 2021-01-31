import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../scenes/SignIn';
import AppStack from '../navigations/AppStack';

const OnBoardingStackNavigator = createStackNavigator();

export default function OnBoardingStack() {
  return (
    <OnBoardingStackNavigator.Navigator
      initialRouteName="AppWalkthroughScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <OnBoardingStackNavigator.Screen name="SignIn" component={SignIn} />
      <OnBoardingStackNavigator.Screen name="HomeScreen" component={AppStack} />
    </OnBoardingStackNavigator.Navigator>
  );
}
