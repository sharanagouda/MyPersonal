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
  const [netPrice, setNetPrice] = useState(0);
  const [gst, setGST] = useState(0);

  const inputFormattedNumber = (input) => {
    let formatter;
    if (Platform.OS == 'ios') {
      formatter = new Intl.NumberFormat(
        'en-IN',
        // {
        //   minimumFractionDigits: 2,
        // }
      ).format(input);
    } else {
      require('intl'); // import intl object
      require('intl/locale-data/jsonp/en-IN');
      require('intl/locale-data/jsonp/fr-BE');
      require('intl/locale-data/jsonp/nl-BE');
      require('intl/locale-data/jsonp/it-IT');
      formatter = new Intl.NumberFormat('en-IN', {
        // style: 'currency',
        currency: 'INR',
      }).format(input);
    }

    return formatter;
  };

  const calculateGST = () => {
    const gstAmount = (parseFloat(netPrice) * gst) / 100;
    return inputFormattedNumber(gstAmount);
  };
  const calculateTotalPrice = () => {
    const gstAmount = (parseFloat(netPrice) * gst) / 100;
    const totalNetPrice = parseFloat(netPrice) + parseFloat(gstAmount);
    return inputFormattedNumber(totalNetPrice);
  };

  return (
    <View style={styles.maincontainer}>
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
          <View style={styles.inputText}>
            <TextInput
              style={styles.inputNumberText}
              underlineColorAndroid="transparent"
              placeholder="Net Price"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              editable={true}
              value={netPrice.toString()}
              keyboardType="phone-pad"
              selectionColor="#000"
              textAlign={'center'}
              maxLength={7}
              onChangeText={(text) => {
                setNetPrice(text);
              }}
            />
            <View style={styles.ruppeeandPercentView}>
              <Text>Rs.</Text>
            </View>
          </View>
          <Slider
            style={{width: 350, height: 40}}
            minimumValue={0}
            step={1}
            maximumValue={2500000}
            minimumTrackTintColor="#FF6347"
            maximumTrackTintColor="#676767"
            onValueChange={(value) => setNetPrice(value)}
          />
        </View>
        <View style={styles.numberCountView}>
          <View style={styles.inputText}>
            <TextInput
              style={styles.inputNumberText}
              underlineColorAndroid="transparent"
              placeholder="GST"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              editable={true}
              value={gst.toString()}
              keyboardType="phone-pad"
              textAlign={'center'}
              selectionColor="#000"
              onChangeText={(text) => {
                setGST(text);
              }}
            />
            <View style={styles.ruppeeandPercentView}>
              <Text>%</Text>
            </View>
          </View>
          <Slider
            style={{width: 350, height: 40}}
            minimumValue={0}
            step={1}
            maximumValue={50}
            minimumTrackTintColor="#FF6347"
            maximumTrackTintColor="#676767"
            onValueChange={(value) => setGST(value)}
          />
        </View>
        <Card style={{padding: 10, margin: 10, backgroundColor: '#25e4a2'}}>
          <Text>Gross price</Text>
          <Text>Rs. {inputFormattedNumber(netPrice)}</Text>
        </Card>
        <Card style={{padding: 10, margin: 10, backgroundColor: '#498dfc'}}>
          <Text>CGST Amount</Text>
          <Text>Rs. {calculateGST()}</Text>
        </Card>
        <Card style={{padding: 10, margin: 10, backgroundColor: '#aaaaaa'}}>
          <Text>IGST Amout</Text>
          <Text>Rs. {calculateGST()}</Text>
        </Card>
        <Card style={{padding: 10, margin: 10, backgroundColor: '#434343'}}>
          <Text>Total Tax</Text>
          <Text>Rs. {calculateTotalPrice()}</Text>
        </Card>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default Buyer;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  ruppeeandPercentView: {
    justifyContent: 'center',
    borderLeftWidth: 2,
    borderLeftColor: 'blue',
    paddingHorizontal: 20,
  },
  inputText: {
    flexDirection: 'row',
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 2,
    paddingLeft: 20,
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
