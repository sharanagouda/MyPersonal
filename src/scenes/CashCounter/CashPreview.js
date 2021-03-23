/* eslint-disable radix */
import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toolbar from '../../components/ToolBar';
import CustomText from '../../components/CustomText';
import converter from 'number-to-words';
import ViewShot, {captureScreen} from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

const CashPreview = ({route}) => {
  const navigation = useNavigation();
  const {cashCounterDetails} = route.params;
  //   const [savedImagePath, setSavedImagePath] = useState('');
  //   console.log(cashCounterDetails);
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

  const takeScreenShot = () => {
    // To capture Screenshot
    captureScreen({
      // Either png or jpg (or webm Android Only), Defaults: png
      format: 'jpg',
      // Quality 0.0 - 1.0 (only available for jpg)
      quality: 0.8,
    }).then(
      //callback function to get the result URL of the screnshot
      (uri) => {
        // setSavedImagePath(uri);
        RNFS.readFile(uri, 'base64').then((res) => {
          let urlString = 'data:image/jpeg;base64,' + res;
          let options = {
            title: 'Share Title',
            message: 'Share Message',
            url: urlString,
            type: 'image/jpeg',
          };
          Share.open(options)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              err && console.log(err);
            });
        });
      },
      (error) => console.error('Oops, Something Went Wrong', error),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toolbar onPressNavigateBack={() => navigation.goBack(null)} />
      <ViewShot options={{format: 'jpg', quality: 0.9}}>
        <View style={styles.mainView}>
          <CustomText text={'Payee Name:'} style={styles.sectionNames}>
            <CustomText
              text={` ${payeeName}`}
              style={styles.convertNumbersToWords}
            />
          </CustomText>
          <CustomText text={`Date:${new Date()}`} style={styles.sectionNames} />
          {TwoThousands ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`2000 x ${TwoThousands}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${2000 * TwoThousands}`}
                  style={styles.sectionNames}
                />
              </View>
            </View>
          ) : null}
          {OneThousands ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`1000 x ${OneThousands}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${1000 * OneThousands}`}
                  style={styles.boldTexts}
                />
              </View>
            </View>
          ) : null}
          {FiveHundread ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`500 x ${FiveHundread}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${500 * FiveHundread}`}
                  style={styles.sectionNames}
                />
              </View>
            </View>
          ) : null}
          {TwoHundread ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`200 x ${TwoHundread}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${200 * TwoHundread}`}
                  style={styles.sectionNames}
                />
              </View>
            </View>
          ) : null}
          {OneHundread ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`100 x ${OneHundread}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${100 * OneHundread}`}
                  style={styles.sectionNames}
                />
              </View>
            </View>
          ) : null}
          {FiftyRupees ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`50 x ${FiftyRupees}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${50 * FiftyRupees}`}
                  style={styles.sectionNames}
                />
              </View>
            </View>
          ) : null}
          {TwentyRupees ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`20 x ${TwentyRupees}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${20 * TwentyRupees}`}
                  style={styles.sectionNames}
                />
              </View>
            </View>
          ) : null}
          {TenRupees ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`10 x ${TenRupees}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${10 * TenRupees}`}
                  style={styles.sectionNames}
                />
              </View>
            </View>
          ) : null}
          {FiveRupees ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`5 x ${FiveRupees}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${5 * FiveRupees}`}
                  style={styles.sectionNames}
                />
              </View>
            </View>
          ) : null}
          {TwoRupees ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`2 x ${TwoRupees}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${2 * TwoRupees}`}
                  style={styles.sectionNames}
                />
              </View>
            </View>
          ) : null}
          {OneRupees ? (
            <View style={styles.numberOfCountesAndAmountView}>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`1 x ${OneRupees}`}
                  style={styles.sectionNames}
                />
              </View>
              <View style={styles.numberOfNotesView}>
                <CustomText
                  text={`= ${1 * OneRupees}`}
                  style={styles.sectionNames}
                />
              </View>
            </View>
          ) : null}
          <View>
            <CustomText
              text={'============================='}
              style={styles.boldTexts}
            />
          </View>
          <CustomText text={'Total Amount: '} style={styles.sectionNames}>
            <CustomText
              text={`${total()}`}
              style={styles.convertNumbersToWords}
            />
          </CustomText>
          <View>
            <CustomText
              text={'============================='}
              style={styles.boldTexts}
            />
          </View>
          <CustomText text={'Total Notes:'} style={styles.sectionNames}>
            <CustomText
              text={`  ${totalCount}`}
              style={styles.convertNumbersToWords}
            />
          </CustomText>
          <CustomText text={'In Words:'} style={styles.sectionNames}>
            <CustomText
              text={` ${convertNumbersToWords()}`}
              style={styles.convertNumbersToWords}
            />
          </CustomText>
        </View>
      </ViewShot>
      <Pressable
        activeOpacity={0.7}
        onPress={takeScreenShot}
        style={styles.touchableOpacityStyle}>
        <Image
          source={require('../../assets/images/Share.png')}
          style={styles.floatingButtonStyle}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default CashPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  mainView: {
    paddingHorizontal: 15,
    marginTop: 50,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  numberOfNotesView: {flex: 0.3},
  numberOfCountesAndAmountView: {flexDirection: 'row'},
  convertNumbersToWords: {
    color: '#000',
    fontSize: 19,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: 'lightgreen',
    borderRadius: 25,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  sectionNames: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  boldTexts: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
});
