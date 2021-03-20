import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
  Linking,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toolbar from '../../components/ToolBar';
import CustomText from '../../components/CustomText';

const CashCounter = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userEmailId, setUserEmailId] = useState('');
  const [isEditable, setEditable] = useState('');

  const total = () => {
    Alert.alert(userName, '', userEmailId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toolbar onPressNavigateBack={() => navigation.goBack(null)} />

      <View style={styles.containerone}>
        <View style={{backgroundColor: 'red', height: 50}}>
          <CustomText text="Payee Name" />
          <Text style={styles.submitButtonText}> Submit </Text>
        </View>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          editable={true}
          value={userName}
          keyboardType="email-address"
          selectionColor="#fff"
          onChangeText={(text) => {
            setUserName(text);
          }}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          editable={true}
          value={userEmailId}
          keyboardType="email-address"
          selectionColor="#fff"
          onChangeText={(text) => {
            setUserEmailId(text);
          }}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => total(userName, userEmailId)}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CashCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  containerone: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
