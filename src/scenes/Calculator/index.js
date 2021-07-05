import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import Toolbar from '../../components/ToolBar';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
var db = openDatabase({name: 'SchoolDatabase.db'});

const Calculator = () => {
  const [S_Name, setName] = useState('');
  const [S_Phone, setPhone] = useState();
  const [S_Address, setAddress] = useState('');
  const navigation = useNavigation();

  const [pricipleAmount, setPricipleAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [superDate, setSuperDate] = useState('');
  const [yearTo, setYearTo] = useState('');
  const [simpleInterest, setSimpleInterest] = useState();
  const [compoundInterest, setCompoundInterest] = useState();

  const calculateInterest = () => {
    const amount = pricipleAmount;
    const interestOfAmount = interest;
    const time = yearFrom;
    const date1 = new Date(`${yearFrom}`);
const date2 = new Date(`${yearTo}`);
const date3 = new Date(`${superDate}`);
    const Difference_In_Time = date1.getTime() - date2.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    const result = parseInt((pricipleAmount * interestOfAmount * time) / 100);
    const compontInterest = pricipleAmount * Math.pow(1 + interest / 100, time);
    setSimpleInterest(result);
    const compontResult = parseInt(compontInterest - pricipleAmount);
    setCompoundInterest(compontResult);
    console.log('years', yearFrom, '| ', yearTo, superDate);
    console.log('difference', date1, '| ', date2, '|', date3);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Toolbar onPressNavigateBack={() => navigation.goBack(null)} />
      <View style={styles.mainContainer}>
        <Text style={{fontSize: 24, textAlign: 'center', color: '#000'}}>
          Interest Calculator
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => setPricipleAmount(text)}
          placeholder="Enter Amount"
          keyboardType={'numeric'}
          value={pricipleAmount}
        />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => setInterest(text)}
          placeholder="Enter Interest"
          keyboardType={'numeric'}
          value={interest}
        />
        <DatePicker
          style={{width: 350, marginTop: 20}}
          date={yearFrom}
          mode="date"
          placeholder="Given Date"
          format="DD/MM/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor: 'red',
              borderWidth: 1,
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            setYearFrom(date);
          }}
        />

        <DatePicker
          style={{width: 350, marginTop: 20, marginBottom: 20}}
          date={yearTo}
          mode="date"
          placeholder="Given Date"
          format="DD/MM/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor: 'red',
              borderWidth: 1,
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            setYearTo(date);
          }}
        />

<DatePicker
          style={{width: 350, marginTop: 20, marginBottom: 20}}
          date={superDate}
          mode="date"
          placeholder="Return Date"
          format="DD/MM/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor: 'red',
              borderWidth: 1,
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            setSuperDate(date);
          }}
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => calculateInterest()}>
          <Text style={styles.touchableOpacityText}>Calculate</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 24, textAlign: 'center', color: '#000'}}>
          Simple {simpleInterest}
        </Text>
        <Text style={{fontSize: 24, textAlign: 'center', color: '#000'}}>
          Compound {compoundInterest}
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Calculator;
const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', padding: 10},
  touchableOpacity: {
    backgroundColor: '#0091EA',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    width: '100%',
  },
  touchableOpacityText: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
    padding: 8,
  },
  textInputStyle: {
    height: 45,
    width: '90%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#00B8D4',
    borderRadius: 7,
    marginTop: 15,
  },
  itemsStyle: {fontSize: 22, color: '#000'},
});
