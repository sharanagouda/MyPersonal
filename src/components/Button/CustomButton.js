import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '../CustomText';
import {Icon} from 'react-native-elements';
// import ImagePath from '../../utils/images';
import * as utils from '../../utils';

function CustomButton(props) {
  const {
    icon,
    text,
    fontStyle,
    textStyle,
    buttonStyle,
    onClick,
    leftIcon,
    leftIconPath,
    children,
    badge,
    count,
    onClear = () => {},
  } = props;
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.button_cantainer, buttonStyle]}>
      {leftIcon ? (
        <TouchableOpacity onPress={onClear} style={styles.iconLeftStyle}>
          <Image source={leftIconPath} />
        </TouchableOpacity>
      ) : null}
      {children}
      <CustomText
        text={text}
        fontStyle={fontStyle}
        style={[styles.textStyle, textStyle]}
      />
      {icon ? (
        <View style={styles.iconStyle}>
          <Icon
            name="arrowright"
            color={'lightblue'}
            size={20}
            type="antdesign"
          />
          {/* <Image source={ImagePath.forwordArrowIcon} /> */}
        </View>
      ) : null}
      {badge ? (
        <View style={styles.badgeStyle}>
          <CustomText
            text={count}
            fontStyle="medium"
            style={[styles.countTextStyle]}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button_cantainer: {
    borderRadius: utils.Scale.moderateScale(28),
    backgroundColor: '#FF4275',
    height: utils.Scale.moderateScale(55),
    paddingHorizontal: utils.Scale.moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: 1,
  },
  iconStyle: {
    // marginTop: utils.Scale.moderateScale(2),
    marginHorizontal: utils.Scale.moderateScale(10),
  },
  iconLeftStyle: {
    // marginHorizontal: utils.Scale.moderateScale(10),
  },
  textStyle: {
    color: '#FFFFFF',
    fontSize: utils.Scale.moderateScale(18),
  },
  badgeStyle: {
    width: utils.Scale.moderateScale(16),
    height: utils.Scale.moderateScale(16),
    borderRadius: utils.Scale.moderateScale(14),
    marginLeft: utils.Scale.moderateScale(5),
    justifyContent: 'center',
    backgroundColor: '#E62E60',
    alignItems: 'center',
  },
  countTextStyle: {
    color: '#FFFFFF',
    fontSize: utils.Scale.moderateScale(10),
  },
});
export default CustomButton;
CustomButton.defaultProps = {
  fontStyle: 'semiBold',
  textStyle: styles.textStyle,
  buttonStyle: styles.button_cantainer,
  icon: false,
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fontStyle: PropTypes.oneOf([
    'regular',
    'bold',
    'light',
    'medium',
    'semiBold',
    'extraBold',
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  textStyle: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  buttonStyle: PropTypes.any,
  icon: PropTypes.bool,
};
