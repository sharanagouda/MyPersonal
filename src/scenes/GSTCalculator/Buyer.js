import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  TextInput,
  StyleSheet,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Card from '../../components/Card';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as utils from '../../utils';
import converter from 'number-to-words';

const Buyer = () => {
  const [TwoThousands, setTwoThousands] = useState('');
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        extraScrollHeight={60}
        enableOnAndroid
        enableAutomaticScroll
        keyboardOpeningTime={0}
        extraHeight={Platform.select({
          ios: utils.Scale.horizontalScale(200),
          android: utils.Scale.horizontalScale(160),
        })}>
    <View style={styles.numberCountView}>
          <View style={{flexDirection: 'row',     borderColor: '#000',
    borderRadius: 5,
    borderWidth: 2,}}>
            <TextInput
              style={styles.inputNumberText}
              underlineColorAndroid="transparent"
              placeholder=""
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              editable={true}
              value={TwoThousands}
              keyboardType="phone-pad"
              selectionColor="#fff"
              textAlign={'center'}
              maxLength={7}
              onChangeText={(text) => {
                setTwoThousands(text);
              }}
            />
            <View style={{justifyContent: 'center', borderLeftWidth:2, borderLeftColor:'blue', paddingHorizontal:20}}>
              <Text>Gr</Text>
            </View>
          </View>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View style={styles.numberCountView}>
          <View style={{flexDirection: 'row',     borderColor: '#000',
    borderRadius: 5,
    borderWidth: 2,}}>
            <TextInput
              style={styles.inputNumberText}
              underlineColorAndroid="transparent"
              placeholder=""
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              editable={true}
              value={TwoThousands}
              keyboardType="phone-pad"
              selectionColor="#fff"
              textAlign={'center'}
              maxLength={7}
              onChangeText={(text) => {
                setTwoThousands(text);
              }}
            />
            <View style={{justifyContent: 'center', borderLeftWidth:2, borderLeftColor:'blue', paddingHorizontal:20}}>
              <Text>Gr</Text>
            </View>
          </View>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
        <Card style={{padding: 10, margin: 10, backgroundColor: '#25e4a2'}}>
          <Text>Gross price</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </Card>
        <Card style={{padding: 10, margin: 10, backgroundColor: '#498dfc'}}>
          <Text>CGST Amount</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </Card>
        <Card style={{padding: 10, margin: 10, backgroundColor: '#aaaaaa'}}>
          <Text>IGST Amout</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </Card>
        <Card style={{padding: 10, margin: 10, backgroundColor: '#434343'}}>
          <Text>Total Tax</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </Card>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default Buyer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  inputNumberText: {
    height: 40,
    width: 200,
  },
  numberCountView: {
    alignItems: 'center',
    marginTop: 30,
  },
});
