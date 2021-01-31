import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button/Button';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Open up Profile!</Text>
      <Button
        title="Proceed"
        onPress={() => {
          navigation.navigate('Search');
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
