/* eslint-disable no-unused-vars */
import React from 'react'; // ,{ useContext }
import {
  View,
  StyleSheet,
  ImageBackground,
  Linking,
  Platform,
} from 'react-native';
import color from 'theme/colors';
import Images from 'utils/images';
import * as utils from 'utils';
import CustomText from './CustomText';
import CustomButton from './buttons/CustomButton';
// import { WebfoxContext } from '../services/webfox';
// eslint-disable-next-line no-empty-pattern

const displayText = {
  updateMessage:
    'This version of the app is not supported. Please update OTTplay to continue using it.',
};
const ForceUpgrade = ({
  // hideModal = () => {}
  messageForUpdate = displayText.updateMessage,
}) => (
  // {
  // const { webstore } = useContext(WebfoxContext);
  // const {
  //   supportPages
  // } = webstore;

  // return
  // eslint-disable-next-line implicit-arrow-linebreak
  <ImageBackground
    source={Images.onboardTopBackgroundImage}
    style={styles.cardStyle}>
    <View style={styles.subView}>
      <View style={styles.textView}>
        <CustomText
          text={messageForUpdate}
          fontStyle="medium"
          style={styles.textStyle}
        />
        <CustomText text="" fontStyle="medium" style={styles.textStyle} />
      </View>
      <View style={styles.buttonsView}>
        {/* <CustomButton
          fontStyle="semiBold"
          textStyle={{
            color: '#FD4275'
          }}
          buttonStyle={styles.exitButtonStyle}
          text="Exit"
          onClick={() => {
            hideModal()
          }}
        /> */}
        <CustomButton
          buttonStyle={styles.updateButtonStyle}
          text="Update Now"
          onClick={() => {
            // hideModal()
            // if (Platform.OS === 'android') {
            //   Linking.openURL(supportPages.data.SHARE_PLAYSTORE)
            // } else {
            //   Linking.openURL(supportPages.data.SHARE_APPSTORE)
            // }
            if (Platform.OS === 'android') {
              Linking.openURL(
                'https://play.google.com/store/apps/details?id=com.ht.ottplay',
              );
            } else {
              Linking.openURL(
                'https://apps.apple.com/in/app/ottplay/id1536115085',
              );
            }
          }}
        />
      </View>
    </View>
  </ImageBackground>
);
// }

export default ForceUpgrade;
const styles = StyleSheet.create({
  cardStyle: {
    marginHorizontal: utils.Scale.moderateScale(15),
    borderColor: '#281855',
    borderWidth: utils.Scale.moderateScale(1),
    borderRadius: utils.Scale.moderateScale(10),
    backgroundColor: color.ellipsisBgColor,
  },
  subView: {
    marginHorizontal: utils.Scale.moderateScale(23),
    marginBottom: utils.Scale.moderateScale(38),
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: utils.Scale.moderateScale(55),
  },
  textStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: utils.Scale.moderateScale(14),
  },
  buttonsView: {
    marginTop: utils.Scale.moderateScale(37),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  exitButtonStyle: {
    width: utils.Scale.moderateScale(110),
    height: utils.Scale.moderateScale(40),
    backgroundColor: 'transparent',
    borderColor: '#FD4275',
    borderWidth: utils.Scale.moderateScale(1),
    marginRight: utils.Scale.moderateScale(15),
  },
  updateButtonStyle: {
    height: utils.Scale.moderateScale(40),
  },
});
