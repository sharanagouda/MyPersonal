import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
  Linking,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toolbar from '../../components/ToolBar';

const CashCounter=()=>{
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
          <Toolbar onPressNavigateBack={() => navigation.goBack(null)} />
          <View>
            <Text>Cash Counter</Text>
            <Text>Cash Counter</Text>
          </View>
        </SafeAreaView>
      );
}

export default CashCounter;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCCCCC',
    },
    innerContainer: {
      marginVertical: 30,
    },
    title: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    repoLink: {
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'bold',
      color: '#0000CC',
      textDecorationLine: 'underline',
    },
  });
  