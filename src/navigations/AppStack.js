import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTabs from './AppTabs';
import Search from '../scenes/Search';
import {Icon} from 'react-native-elements';
import Calculator from '../scenes/Calculator';
import Wether from '../scenes/Wether';

const AppStackNavigator = createStackNavigator();

export default function AppStack() {
  return (
    <AppStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#000',
        headerTitle: '',
        headerBackImage: () => <Icon name="home" color={'blue'} size={26} />,
        headerBackTitle: ' ',
      }}>
      <AppStackNavigator.Screen
        name="Home"
        component={AppTabs}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      <AppStackNavigator.Screen
        name="Wether"
        component={Wether}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      <AppStackNavigator.Screen
        options={() => ({
          headerShown: false,
        })}
        name="calculator"
        component={Calculator}
        initialParams={{contentType: 'movie', name: ''}}
      />
      <AppStackNavigator.Screen
        options={() => ({
          headerShown: false,
        })}
        name="Search"
        component={Search}
        initialParams={{movieId: '0', contentType: 'movie', name: ''}}
      />
    </AppStackNavigator.Navigator>
  );
}
