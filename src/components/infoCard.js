import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import * as utils from 'utils';
import Images from 'utils/images';
import IconButton from 'components/buttons/IconButton';
import color from '../theme/colors';

const InfoCard = ({
  handleCloseAction,
  children,
  fullWidth,
  height,
  ellipsis,
}) => (
  <View style={[styles.popupOverlay]}>
    <ImageBackground
      imageStyle={styles.imageBackgroundStyles}
      source={Images.onboardTopBackgroundImage}
      style={[
        styles.popup,
        fullWidth ? styles.popupDeviceWidth : null,
        height ? styles.popupDeviceHeight : null,
        ellipsis ? styles.ellipsisPopup : null,
      ]}>
      <View
        style={[
          fullWidth
            ? styles.closeButtonViewDeviceWidth
            : styles.closeButtonView,
        ]}>
        <View>
          <IconButton
            source={Images.cancelIconBanner}
            style={styles.whiteCloseIconButton}
            onPress={handleCloseAction}
            imageStyle={styles.imageStyle}
          />
        </View>
      </View>
      {children}
    </ImageBackground>
  </View>
);

export default InfoCard;

const styles = StyleSheet.create({
  popupOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: utils.Scale.moderateScale(10),
  },
  popup: {
    width: utils.Scale.moderateScale(345),
    // height: utils.Scale.moderateScale(234),
    paddingBottom: utils.Scale.moderateScale(25),
    padding: utils.Scale.moderateScale(10),
    margin: utils.Scale.moderateScale(5),
    backgroundColor: color.ellipsisBgColor,
  },
  imageBackgroundStyles: {
    height: '90%',
    width: utils.Scale.moderateScale(345),
    backgroundColor: color.ellipsisBgColor,
    borderRadius: utils.Scale.moderateScale(10),
  },
  ellipsisPopup: {
    borderRadius: utils.Scale.moderateScale(10),
    borderColor: '#281855',
    width: utils.Scale.moderateScale(345),
    // height: utils.Scale.moderateScale(234),
    // height: utils.Scale.moderateScale(180),
    padding: utils.Scale.moderateScale(10),
    margin: utils.Scale.moderateScale(5),
  },
  popupDeviceWidth: {
    width: '100%',
    height: utils.Scale.moderateScale(200),
  },
  popupDeviceHeight: {
    borderRadius: utils.Scale.moderateScale(10),
    width: utils.Scale.moderateScale(345),
    height: utils.Scale.moderateScale(390),
  },

  closeButtonView: {
    alignItems: 'flex-end',
    // paddingRight: utils.Scale.moderateScale(20),
    //  paddingVertical: utils.Scale.moderateScale(5),
  },
  closeButtonViewDeviceWidth: {
    alignItems: 'flex-end',
    paddingRight: utils.Scale.moderateScale(5),
    paddingVertical: utils.Scale.moderateScale(5),
  },
  whiteCloseIconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: utils.Scale.moderateScale(34),
    width: utils.Scale.moderateScale(34),
    borderRadius: utils.Scale.moderateScale(34),
  },
  imageStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
