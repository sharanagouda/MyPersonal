import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toolbar from '../../components/ToolBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Buyer from './Buyer';
import Wholesaler from './Wholesaler';
import Manufacturer from './Manufacturer';

const GSTCalculator = () => {
  const navigation = useNavigation();
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
        <Tab.Screen name="Buyer" component={Buyer} />
        <Tab.Screen name="Manufacturer" component={Manufacturer} />
        <Tab.Screen name="Wholesaler/Retailer" component={Wholesaler} />
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
