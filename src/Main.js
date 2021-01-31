import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StoreProvider} from './reducers/index';

export default function Main() {
  return (
    <StoreProvider>
      <View style={styles.container}>
        <Text>Open up Main!</Text>
      </View>
    </StoreProvider>
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
