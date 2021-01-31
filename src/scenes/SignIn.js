import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {storeOnboardData} from '../utils';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Open up SignIn!</Text>
      <Button
        title="Proceed"
        onPress={() => {
          storeOnboardData('true');
          navigation.reset({
            index: 0,
            routes: [{name: 'HomeScreen'}],
          });
          // navigation.navigate('Search');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
