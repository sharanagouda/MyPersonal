import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toolbar from '../../components/ToolBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const GSTCalculator = () => {
  const navigation = useNavigation();
  function HomeScreen() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <Toolbar onPressNavigateBack={() => navigation.goBack(null)} />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          labelStyle: {fontSize: 15, textTransform: 'capitalize'},
          style: {backgroundColor: 'powderblue'},
        }}>
        <Tab.Screen name="Buyer" component={HomeScreen} />
        <Tab.Screen name="Manufacturer" component={SettingsScreen} />
        <Tab.Screen name="Wholesaler/Retailer" component={SettingsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
export default GSTCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
  },
});
