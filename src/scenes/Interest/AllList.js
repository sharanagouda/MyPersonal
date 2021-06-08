import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Toolbar from '../../components/ToolBar';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation} from '@react-navigation/native';

var db = openDatabase({name: 'SchoolDatabase.db'});

function HomeScreen() {
  const [S_Name, setName] = useState('');
  const [S_Phone, setPhone] = useState();
  const [S_Address, setAddress] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Student_Table'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Student_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Student_Table(student_id INTEGER PRIMARY KEY AUTOINCREMENT, student_name VARCHAR(30), student_phone INT(15), student_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

  const insertData = () => {
    if (S_Name == '' || S_Phone == '' || S_Address == '') {
      Alert.alert('Please Enter All the Values');
    } else {
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO Student_Table (student_name, student_phone, student_address) VALUES (?,?,?)',
          [S_Name, S_Phone, S_Address],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Data Inserted Successfully....');
            } else {
              Alert.alert('Failed....');
            }
          },
        );
      });
    }
  };

  const navigateToViewScreen = () => {
    navigation.navigate('ViewAllStudentScreen');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Toolbar onPressNavigateBack={() => navigation.goBack(null)} />
      <View style={styles.mainContainer}>
        <Text style={{fontSize: 24, textAlign: 'center', color: '#000'}}>
          Insert Data Into SQLite Database
        </Text>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => setName(text)}
          placeholder="Enter Student Name"
          value={S_Name}
        />

        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => setPhone(text)}
          placeholder="Enter Student Phone Number"
          keyboardType={'numeric'}
          value={S_Phone}
        />

        <TextInput
          style={[styles.textInputStyle, {marginBottom: 20}]}
          onChangeText={(text) => setAddress(text)}
          placeholder="Enter Student Address"
          value={S_Address}
        />

        <TouchableOpacity style={styles.touchableOpacity} onPress={insertData}>
          <Text style={styles.touchableOpacityText}>
            {' '}
            Click Here To Insert Data Into SQLite Database{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchableOpacity,
            {marginTop: 20, backgroundColor: '#33691E'},
          ]}
          onPress={navigateToViewScreen}>
          <Text style={styles.touchableOpacityText}>
            {' '}
            Click Here View All Students List{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function AllList() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

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

  itemsStyle: {
    fontSize: 22,
    color: '#000',
  },
});
