import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AllList from './AllList';

export default function AllInterestList() {
  return (
    <SafeAreaView style={styles.container}>
      <AllList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
  },
});
