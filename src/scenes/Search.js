import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getSelectedBookDetails} from '../actions';
import Toolbar from '../components/ToolBar';

export default function Search({route}) {
  const {selectedBookDetails} = useSelector((state) => state.booksReducer);
  console.log('selectedBookDetails', selectedBookDetails);
  const state = useSelector((state) => state);
  const {bookId} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getSelectedBookDetailFromList = (bookId) =>
    dispatch(getSelectedBookDetails(bookId));

  useEffect(() => {
    getBookDetails(bookId);
  }, [bookId]);

  const getBookDetails = (bookId) => {
    getSelectedBookDetailFromList(bookId);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Toolbar onPressNavigateBack={()=> navigation.goBack(null)}/>
      <View style={styles.container}>
        <Text>{selectedBookDetails.id}</Text>
        <Text>{selectedBookDetails.title}</Text>
        <Text>{selectedBookDetails.Quote1}</Text>
        <Text>{selectedBookDetails.Quote2}</Text>
        <Text>{selectedBookDetails.image_url}</Text>
        <Text>{selectedBookDetails.rating}</Text>
        <Text>{selectedBookDetails.format}</Text>
        <Text>{selectedBookDetails.description}</Text>
      </View>
    </SafeAreaView>
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
