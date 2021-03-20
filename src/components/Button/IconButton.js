import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

// IconButton Styles
const styles = StyleSheet.create({
  imageStyle: {
    // alignSelf: 'center',
    // justifyContent: 'center'
  },
  style: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

// IconButton
const IconButton = ({onPress, source, style, imageStyle}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.style, style]}
    testID="iconButton">
    <Image
      source={source}
      style={[styles.imageStyle, imageStyle]}
      testID="iconImage"
    />
  </TouchableOpacity>
);

export default IconButton;

IconButton.defaultProps = {
  // imagePath: Images.settingsIcon
};

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  // imagePath: PropTypes.string
};
