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

import {openDatabase} from 'react-native-sqlite-storage';
import {useIsFocused} from '@react-navigation/native';

var db = openDatabase({name: 'SchoolDatabase.db'});

const ViewAllStudentScreen = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM Student_Table', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        setItems(temp);

        if (results.rows.length >= 1) {
          setEmpty(false);
        } else {
          setEmpty(true);
        }
      });
    });
  }, [isFocused]);

  const listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  const emptyMSG = (status) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{fontSize: 25, textAlign: 'center'}}>
          No Record Inserted Database is Empty...
        </Text>
      </View>
    );
  };

  const navigateToEditScreen = (id, name, phoneNumber, address) => {
    navigation.navigate('EditRecordScreen', {
      student_id: id,
      student_name: name,
      student_phone: phoneNumber,
      student_address: address,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {empty ? (
          emptyMSG(empty)
        ) : (
          <FlatList
            data={items}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View key={item.student_id} style={{padding: 20}}>
                <TouchableOpacity
                  onPress={() =>
                    navigateToEditScreen(
                      item.student_id,
                      item.student_name,
                      item.student_phone,
                      item.student_address,
                    )
                  }>
                  <Text style={styles.itemsStyle}> Id: {item.student_id} </Text>
                  <Text style={styles.itemsStyle}>
                    {' '}
                    Name: {item.student_name}{' '}
                  </Text>
                  <Text style={styles.itemsStyle}>
                    {' '}
                    Phone Number: {item.student_phone}{' '}
                  </Text>
                  <Text style={styles.itemsStyle}>
                    {' '}
                    Address: {item.student_address}{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ViewAllStudentScreen;
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
