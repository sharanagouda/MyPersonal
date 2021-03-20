import React from 'react';
import {Text, StyleSheet} from 'react-native';
import constant from '../theme/constants';
import PropTypes from 'prop-types';
import * as utils from '../utils';
import {color} from '../theme';

const {
  FONT_TYPE_SEMI_BOLD,
  FONT_TYPE_REGULAR,
  FONT_TYPE_BOLD,
  FONT_TYPE_LIGHT,
  FONT_TYPE_MEDIUM,
  FONT_TYPE_EXTRA_BOLD,
} = constant;

const CustomText = (props) => {
  const {text, fontStyle, style, numberOfLines, onTextLayout, children} = props;
  let textFamily = {...utils.Typography.FONT_REGULAR};
  switch (fontStyle) {
    case FONT_TYPE_REGULAR:
      textFamily = {...textFamily, ...utils.Typography.FONT_REGULAR};
      break;
    case FONT_TYPE_BOLD:
      textFamily = {...textFamily, ...utils.Typography.FONT_BOLD};
      break;
    case FONT_TYPE_LIGHT:
      textFamily = {...textFamily, ...utils.Typography.FONT_LIGHT};
      break;
    case FONT_TYPE_MEDIUM:
      textFamily = {...textFamily, ...utils.Typography.FONT_MEDIUM};
      break;
    case FONT_TYPE_SEMI_BOLD:
      textFamily = {...textFamily, ...utils.Typography.FONT_SEMI_BOLD};
      break;
    case FONT_TYPE_EXTRA_BOLD:
      textFamily = {...textFamily, ...utils.Typography.FONT_EXTRA_BOLD};
      break;
    default:
      break;
  }
  return (
    <Text
      // style={[textFamily, style]}
      style={[style]}
      numberOfLines={numberOfLines}
      onTextLayout={onTextLayout}>
      {text}
      {children}
    </Text>
  );
};

export default CustomText;
const styles = StyleSheet.create({
  textStyle: {
    color: color.white,
    fontSize: utils.Scale.moderateScale(18),
  },
});

CustomText.defaultProps = {
  fontStyle: 'regular',
  style: styles.textStyle,
  numberOfLines: 0,
  text: '',
};

CustomText.propTypes = {
  text: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  fontStyle: PropTypes.oneOf([
    'regular',
    'bold',
    'light',
    'medium',
    'semiBold',
    'extraBold',
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  numberOfLines: PropTypes.number,
};
