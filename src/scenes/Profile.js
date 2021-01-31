import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button/Button';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';
import actions from '../actions';
import {StoreProvider} from '../reducers/index';

export default function Profile({navigation, route}) {
  const data2 = useSelector((state) => state);
  console.log('Profile Data', data2);
  return (
    <StoreProvider.Consumer>
      <View style={styles.container}>
        <Text>Open up Profile!</Text>
        <Button
          title="Proceed"
          onPress={() => {
            // actionDispatch(actions.ONCLICK_BUTTON, 'item');
            navigation.navigate('Search');
          }}
        />
      </View>
    </StoreProvider.Consumer>
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
