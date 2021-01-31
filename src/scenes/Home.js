import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';
import {SearchBar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {getBooks, addBookmark, removeBookmark} from '../actions';

export default function BooksList() {
  const {books, bookmarks} = useSelector((state) => state.booksReducer);
  console.log('Books', books);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const fetchBooks = () => dispatch(getBooks());
  const addToBookmarkList = (book) => dispatch(addBookmark(book));
  const removeFromBookmarkList = (book) => dispatch(removeBookmark(book));
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    setFilteredDataSource(books);
    setMasterDataSource(books);
  }, [books]);

  const handleAddBookmark = (book) => {
    addToBookmarkList(book);
  };

  const handleRemoveBookmark = (book) => {
    removeFromBookmarkList(book);
  };

  const handleSelectedBookDetails = (item) => {
    navigation.navigate('Search', {bookId: item.id});
  };

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ifExists = (book) => {
    if (bookmarks.filter((item) => item.id === book.id).length > 0) {
      return true;
    }

    return false;
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handleSelectedBookDetails(item);
        }}>
        <View style={{marginVertical: 12}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            {/* Book Cover */}
            <Image
              source={{uri: item.image_url}}
              resizeMode="cover"
              style={{width: 100, height: 150, borderRadius: 10}}
            />
            {/* Book Metadata */}
            <View style={{flex: 1, marginLeft: 12}}>
              {/* Book Title */}
              <View>
                <Text style={{fontSize: 22, paddingRight: 16, color: 'white'}}>
                  {item.title}
                </Text>
              </View>
              {/* Meta info */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <Icon
                  name="like1"
                  color={'lightblue'}
                  size={20}
                  type="antdesign"
                />
                <Text style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}>
                  {item.num_pages}
                </Text>
                <Icon
                  name="star"
                  color={'yellow'}
                  size={20}
                  style={{paddingLeft: 16}}
                />
                <Text style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}>
                  {item.rating}
                </Text>
              </View>
              {/* Buttons */}
              <View style={{marginTop: 14}}>
                <TouchableOpacity
                  onPress={() =>
                    ifExists(item)
                      ? handleRemoveBookmark(item)
                      : handleAddBookmark(item)
                  }
                  activeOpacity={0.7}
                  style={{
                    flexDirection: 'row',
                    padding: 2,
                    backgroundColor: ifExists(item) ? '#F96D41' : '#2D3038',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 40,
                    width: 40,
                  }}>
                  <Icon name="bookmark" color={'white'} size={24} style={{}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <SearchBar
        round
        searchIcon={{size: 24}}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction('')}
        placeholder="Type Here..."
        value={search}
      />
      <View
        style={{flex: 1, paddingHorizontal: 16, backgroundColor: '#1E1B26'}}>
        <Text style={{color: 'white', fontSize: 22}}>Bestsellers</Text>
        <View style={{flex: 1, marginTop: 8}}>
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
