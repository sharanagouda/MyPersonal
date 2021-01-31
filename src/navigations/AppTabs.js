import * as React from 'react';
import {Icon} from 'react-native-elements';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      {/* <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}) => (
            <Icon name="rowing" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
