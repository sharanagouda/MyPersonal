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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as utils from '../../utils';
import converter from 'number-to-words';
import helper from '../../utils/helper';
import onShare from '../../utils/share';

const CashCounter = () => {
  const navigation = useNavigation();
  const [payeeName, setPayeeName] = useState('');
  const [TwoThousands, setTwoThousands] = useState('');
  const [OneThousands, setOneThousands] = useState('');
  const [FiveHundread, SetFiveHundread] = useState('');
  const [TwoHundread, SetTwoHundread] = useState('');
  const [OneHundread, SetOneHundread] = useState('');
  const [FiftyRupees, SetFiftyRupees] = useState('');
  const [TwentyRupees, SetTwentyRupees] = useState('');
  const [TenRupees, SetTenRupees] = useState('');
  const [FiveRupees, SetFiveRupees] = useState('');
  const [TwoRupees, SetTwoRupees] = useState('');
  const [OneRupees, SetOneRupees] = useState('');
  const [isEditable, setEditable] = useState('');
  const [totalAmount, setTotalAmount] = useState();
  const [totalCount, setTotalCount] = useState();
  const date = new Date();

  useEffect(() => {
    const totalValue =
      TwoThousands * 2000 +
      OneThousands * 1000 +
      FiveHundread * 500 +
      TwoHundread * 200 +
      OneHundread * 100 +
      FiftyRupees * 50 +
      TwentyRupees * 20 +
      TenRupees * 10 +
      FiveRupees * 5 +
      TwoRupees * 2 +
      OneRupees * 1;
    setTotalAmount(totalValue);

    const totalNoteCount =
      (parseInt(TwoThousands) || 0) +
      (parseInt(OneThousands) || 0) +
      (parseInt(FiveHundread) || 0) +
      (parseInt(TwoHundread) || 0) +
      (parseInt(OneHundread) || 0) +
      (parseInt(FiftyRupees) || 0) +
      (parseInt(TwentyRupees) || 0) +
      (parseInt(TenRupees) || 0) +
      (parseInt(FiveRupees) || 0) +
      (parseInt(TwoRupees) || 0) +
      (parseInt(OneRupees) || 0);
    setTotalCount(totalNoteCount);
  }, [
    TwoThousands,
    OneThousands,
    FiveHundread,
    FiveRupees,
    OneHundread,
    FiftyRupees,
    OneRupees,
    TenRupees,
    TwentyRupees,
    TwoHundread,
    TwoRupees,
  ]);

  const total = () => {
    var formatter = new Intl.NumberFormat(
      'en-IN',
      // {
      //   minimumFractionDigits: 2,
      // }
    );
    return formatter.format(totalAmount);
  };

  const multiFlyFunction = (data, multiValue) => {
    const totalValue = data * multiValue;
    var formatter = new Intl.NumberFormat(
      'en-IN',
      // {
      //   minimumFractionDigits: 2,
      // }
    );
    return `${formatter.format(totalValue)}/-`;
  };

  const totalNumberOfCount = () => {
    //  Alert.alert(TwoThousands);
    const notes = totalCount;

    return notes;
  };

  const convertNumbersToWords = () => {
    const numberToWordsResults =
      totalAmount === 0 ? '' : `${converter.toWords(totalAmount)} only`;
    return numberToWordsResults;
  };

  const clearAllDatas = () => {
    setPayeeName('');
    setTwoThousands('');
    setOneThousands('');
    SetFiveHundread('');
    SetTwoHundread('');
    SetOneHundread('');
    SetFiftyRupees('');
    SetTwentyRupees('');
    SetTenRupees('');
    SetFiveRupees('');
    SetTwoRupees('');
    SetOneRupees('');
    setTotalAmount('');
  };

  const shareTheDetails = () => {
    const message = `Date: ${helper.formatDateDDMMYY(date)}\n ${
      TwoThousands && `2000 x ${TwoThousands} = ${TwoThousands * 2000}\n`
    } ${OneThousands && `1000 x ${OneThousands} = ${OneThousands * 1000} \n`} ${
      FiveHundread && `500 x ${FiveHundread} = ${FiveHundread * 500}\n`
    } ${TwoHundread && `200 x ${TwoHundread} = ${TwoHundread * 200}\n`}${
      OneHundread && `100 x ${OneHundread} = ${OneHundread * 100}\n`
    }${FiftyRupees && `50 x ${FiftyRupees} = ${FiftyRupees * 50}\n`}
    ${TwentyRupees ? `20 x ${TwentyRupees} = ${TwentyRupees * 20}` : ''}
    ${TenRupees && `10 x ${TenRupees} = ${TenRupees * 10}\n`}${
      FiveRupees && `5 x ${FiveRupees} = ${FiveRupees * 5}\n`
    }${TwoRupees && `2 x ${TwoRupees} = ${TwoRupees * 2}\n`}
    ${
      OneRupees && `10 x ${OneRupees} = ${OneRupees * 1}\n`
    } =================== \n Total = ${totalAmount} \n ${convertNumbersToWords()}\n [Total ${totalCount} Notes]`;
    // Alert.alert(message);
    onShare(message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toolbar onPressNavigateBack={() => navigation.goBack(null)} />
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
        <View style={styles.containerone}>
          <View style={styles.payeeView}>
            <CustomText text="Payee Name: " />
            <TextInput
              style={styles.payeeInput}
              underlineColorAndroid="transparent"
              placeholder=""
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              editable={true}
              value={payeeName}
              keyboardType="default"
              selectionColor="#fff"
              onChangeText={(text) => {
                setPayeeName(text);
              }}
            />
            <Pressable
              onPress={() => setPayeeName('')}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.wrapperCustom,
              ]}>
              <Text style={{fontWeight: '600'}}>X</Text>
            </Pressable>
          </View>
          <View style={styles.headingView}>
            <CustomText text="Currency " />
            <CustomText text="Value" />
            <CustomText text="Amount" />
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="2000" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
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
                onChangeText={(text) => {
                  setTwoThousands(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(TwoThousands, 2000)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="1000" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
              <TextInput
                style={styles.inputNumberText}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={true}
                value={OneThousands}
                keyboardType="phone-pad"
                selectionColor="#fff"
                onChangeText={(text) => {
                  setOneThousands(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(OneThousands, 1000)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="500" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
              <TextInput
                style={styles.inputNumberText}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={true}
                value={FiveHundread}
                keyboardType="phone-pad"
                selectionColor="#fff"
                onChangeText={(text) => {
                  SetFiveHundread(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(FiveHundread, 500)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="200" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
              <TextInput
                style={styles.inputNumberText}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={true}
                value={TwoHundread}
                keyboardType="phone-pad"
                selectionColor="#fff"
                onChangeText={(text) => {
                  SetTwoHundread(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(TwoHundread, 200)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="100" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
              <TextInput
                style={styles.inputNumberText}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={true}
                value={OneHundread}
                keyboardType="phone-pad"
                selectionColor="#fff"
                onChangeText={(text) => {
                  SetOneHundread(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(OneHundread, 100)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="50" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
              <TextInput
                style={styles.inputNumberText}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={true}
                value={FiftyRupees}
                keyboardType="phone-pad"
                selectionColor="#fff"
                onChangeText={(text) => {
                  SetFiftyRupees(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(FiftyRupees, 50)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="20" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
              <TextInput
                style={styles.inputNumberText}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={true}
                value={TwentyRupees}
                keyboardType="phone-pad"
                selectionColor="#fff"
                onChangeText={(text) => {
                  SetTwentyRupees(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(TwentyRupees, 20)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="10" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
              <TextInput
                style={styles.inputNumberText}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={true}
                value={TenRupees}
                keyboardType="phone-pad"
                selectionColor="#fff"
                onChangeText={(text) => {
                  SetTenRupees(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(TenRupees, 10)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="5" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
              <TextInput
                style={styles.inputNumberText}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={true}
                value={FiveRupees}
                keyboardType="phone-pad"
                selectionColor="#fff"
                onChangeText={(text) => {
                  SetFiveRupees(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(FiveRupees, 5)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="2" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
              <TextInput
                style={styles.inputNumberText}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={true}
                value={TwoRupees}
                keyboardType="phone-pad"
                selectionColor="#fff"
                onChangeText={(text) => {
                  SetTwoRupees(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(TwoRupees, 2)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.ammountView}>
              <CustomText text="1" style={styles.ammountText} />
            </View>
            <View style={styles.numberCountView}>
              <CustomText text="X  " style={styles.ammountText} />
              <TextInput
                style={styles.inputNumberText}
                underlineColorAndroid="transparent"
                placeholder=""
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                editable={true}
                value={OneRupees}
                keyboardType="phone-pad"
                selectionColor="#fff"
                onChangeText={(text) => {
                  SetOneRupees(text);
                }}
              />
              <CustomText text="  =" style={styles.ammountText} />
            </View>
            <View style={styles.totalView}>
              <CustomText
                text={multiFlyFunction(OneRupees, 1)}
                style={styles.ammountText}
              />
            </View>
          </View>
          <View style={[styles.mainView, styles.headingView]}>
            <View style={styles.ammountView}>
              <CustomText text="Total: " />
            </View>
            <View style={styles.totalCountView}>
              <CustomText text={totalNumberOfCount()} />
            </View>
            <View style={styles.totalAmmountView}>
              <CustomText text={total()} />
            </View>
          </View>
          {totalAmount ? (
            <View style={styles.numberToWordsView}>
              {/* <View style={styles.inWordsView}>
                <CustomText text="In Words:" />
              </View> */}
              <CustomText
                text={convertNumbersToWords()}
                style={styles.numberToWords}
              />
            </View>
          ) : null}
          <View style={styles.buttonsView}>
            <Pressable
              onPress={() => totalAmount && setPayeeName('')}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.wrapperCustom,
              ]}>
              <Text style={{fontWeight: '600'}}>Save</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                totalAmount && shareTheDetails();
              }}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.wrapperCustom,
              ]}>
              <Text style={{fontWeight: '600'}}>Share</Text>
            </Pressable>
            <Pressable
              onPress={() => clearAllDatas()}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.wrapperCustom,
              ]}>
              <Text style={{fontWeight: '600'}}>Clear All</Text>
            </Pressable>
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => total(TwoThousands, FiveHundread)}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CashCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  wrapperCustom: {
    borderRadius: 5,
    padding: 6,
  },
  payeeView: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  payeeInput: {
    height: 40,
    width: '65%',
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  inputNumberText: {
    height: 35,
    width: 100,
    borderColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
  },
  mainView: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  ammountView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inWordsView: {
    flex: 0.4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  ammountText: {color: '#000', fontSize: 16},
  numberCountView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.45,
  },
  totalView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  totalAmmountView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalCountView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
  headingView: {
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  numberToWordsView: {
    backgroundColor: '#7a42f4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonsView: {
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  numberToWords: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
