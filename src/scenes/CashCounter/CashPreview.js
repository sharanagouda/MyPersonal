/* eslint-disable radix */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toolbar from '../../components/ToolBar';
import CustomText from '../../components/CustomText';
import converter from 'number-to-words';

const CashPreview = ({route}) => {
  const navigation = useNavigation();

  const {cashCounterDetails} = route.params;
  console.log(cashCounterDetails);
  const {
    payeeName,
    TwoThousands,
    OneThousands,
    FiveHundread,
    TwoHundread,
    OneHundread,
    FiftyRupees,
    TwentyRupees,
    TenRupees,
    FiveRupees,
    TwoRupees,
    OneRupees,
    totalAmount,
    totalCount,
  } = cashCounterDetails;

  const date = new Date();
  const convertNumbersToWords = () => {
    const numberToWordsResults =
      totalAmount === 0 ? '' : `${converter.toWords(totalAmount)} only`;
    return numberToWordsResults;
  };

  const total = () => {
    let formatter;
    if (Platform.OS == 'ios') {
      formatter = new Intl.NumberFormat(
        'en-IN',
        // {
        //   minimumFractionDigits: 2,
        // }
      ).format(totalAmount);
    } else {
      require('intl'); // import intl object
      require('intl/locale-data/jsonp/en-IN');
      require('intl/locale-data/jsonp/fr-BE');
      require('intl/locale-data/jsonp/nl-BE');
      require('intl/locale-data/jsonp/it-IT');
      formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      }).format(totalAmount);
    }
    return formatter;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toolbar onPressNavigateBack={() => navigation.goBack(null)} />
      <View style={styles.mainView}>
        <CustomText
          text="Payee Name: "
          style={{color: '#000', fontSize: 18, fontWeight: '600'}}
        />
        <CustomText
          text={`Date:${new Date()}`}
          style={{color: '#000', fontSize: 18, fontWeight: '600'}}
        />
        {TwoThousands ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`2000 x ${TwoThousands}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${2000 * TwoThousands}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        {OneThousands ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`1000 x ${OneThousands}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${1000 * OneThousands}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        {FiveHundread ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`500 x ${FiveHundread}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${500 * FiveHundread}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        {TwoHundread ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`200 x ${TwoHundread}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${200 * TwoHundread}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        {OneHundread ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`100 x ${OneHundread}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${100 * OneHundread}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        {FiftyRupees ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`50 x ${FiftyRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${50 * FiftyRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        {TwentyRupees ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`20 x ${TwentyRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${20 * TwentyRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        {TenRupees ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`10 x ${TenRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${10 * TenRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        {FiveRupees ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`5 x ${FiveRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${5 * FiveRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        {TwoRupees ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`2 x ${TwoRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${2 * TwoRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        {OneRupees ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`1 x ${OneRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <CustomText
                text={`= ${1 * OneRupees}`}
                style={{color: '#000', fontSize: 18, fontWeight: '600'}}
              />
            </View>
          </View>
        ) : null}
        <CustomText
          text={`Total Amount: ${total()}`}
          style={{color: '#000', fontSize: 18, fontWeight: '600'}}
        />
        <CustomText
          text={`Total Notes: ${totalCount}`}
          style={{color: '#000', fontSize: 18, fontWeight: '600'}}
        />
        <CustomText
          text={`In Words: ${convertNumbersToWords()}`}
          style={{color: '#000', fontSize: 18, fontWeight: '600'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default CashPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  mainView: {},
});
