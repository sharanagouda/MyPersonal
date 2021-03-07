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

const menuData = [
  {
    id: 1,
    title: 'Calculator',
    color: '#FF4500',
    image: 'https://img.icons8.com/color/70/000000/name.png',
    page: 'calculator',
  },
  {
    id: 2,
    title: 'Home',
    color: '#87CEEB',
    image: 'https://img.icons8.com/office/70/000000/home-page.png',
    page: 'Wether',
  },
  {
    id: 3,
    title: 'Love',
    color: '#4682B4',
    image: 'https://img.icons8.com/color/70/000000/two-hearts.png',
    page: 'calculator',
  },
  {
    id: 4,
    title: 'Family',
    color: '#6A5ACD',
    image: 'https://img.icons8.com/color/70/000000/family.png',
    page: 'calculator',
  },
  {
    id: 5,
    title: 'Friends',
    color: '#FF69B4',
    image: 'https://img.icons8.com/color/70/000000/groups.png',
    page: 'calculator',
  },
  {
    id: 6,
    title: 'School',
    color: '#00BFFF',
    image: 'https://img.icons8.com/color/70/000000/classroom.png',
    page: 'calculator',
  },
  {
    id: 7,
    title: 'Things',
    color: '#00FFFF',
    image: 'https://img.icons8.com/dusk/70/000000/checklist.png',
    page: 'calculator',
  },
  {
    id: 8,
    title: 'World',
    color: '#20B2AA',
    image: 'https://img.icons8.com/dusk/70/000000/globe-earth.png',
    page: 'calculator',
  },
  {
    id: 9,
    title: 'Remember',
    color: '#191970',
    image: 'https://img.icons8.com/color/70/000000/to-do.png',
    page: 'calculator',
  },
  {
    id: 10,
    title: 'Game',
    color: '#008080',
    image: 'https://img.icons8.com/color/70/000000/basketball.png',
    page: 'calculator',
  },
];

export default function BooksList() {
  const navigation = useNavigation();

  const handleSelectedBookDetails = (item) => {
    navigation.navigate(`${item.page}`);
  };

  const renderItem = ({item}) => {
    // console.log('item', item);
    return (
      <TouchableOpacity
        onPress={() => {
          handleSelectedBookDetails(item);
        }}>
        <View>
          <View style={[styles.card, {backgroundColor: item.color}]}>
            <Image style={styles.cardImage} source={{uri: item.image}} />
          </View>

          <View style={styles.cardHeader}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[styles.title, {color: item.color}]}>
                {item.title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={menuData}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({item}) => renderItem({item})}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: '#e2e2e2',
    //flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    flex: 1,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
