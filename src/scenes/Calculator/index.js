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

export default function Calculator() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Toolbar onPressNavigateBack={() => navigation.goBack(null)} />
      <View>
        <Text>skdjf</Text>
      </View>
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
