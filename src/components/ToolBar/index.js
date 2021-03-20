import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
/**
 * @import styles object.This object have all the styles written for this particular screen.
 */
import styles from './styles';

const propTypes = {
  title: PropTypes.string,
  leftIconName: PropTypes.string,
  onPressNavigateBack: PropTypes.func,
  onPressNotificationIcon: PropTypes.func,
  toolbarContainer: PropTypes.object,
  oceanLogoContainer: PropTypes.object,
  oceanLogoImage: PropTypes.object,
  notifications: PropTypes.number,
};

const defaultProps = {
  title: '',
  onPressNavigateBack: () => {},
  onPressNotificationIcon: () => {},
  oceanLogoContainer: {},
  oceanLogoImage: {},
  notifications: 0,
};
/**
 * Represents Toolbar
 * @class Toolbar
 * @extends Component
 */
class Toolbar extends Component {
  /**
   * @function render
   * React render method for rendering the native elements
   */
  render() {
    // console.log('notifications', this.props.notifications);
    return (
      <View style={[styles.toolbarContainer, this.props.toolbarContainer]}>
        <View style={styles.backArrowContainer}>
          {this.props.leftArrowIcon !== '' && (
            <TouchableOpacity onPress={this.props.onPressNavigateBack}>
              <View style={styles.leftIconContainer}>
                <Icon
                  name="arrowleft"
                  color={'lightblue'}
                  size={20}
                  type="antdesign"
                />
                <Text style={styles.backText}> Back</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={[styles.oceanLogoContainer, this.props.oceanLogoContainer]}
        />
        <View style={styles.notificationContainer}>
          {this.props.notificationIcon !== '' && (
            <TouchableOpacity onPress={this.props.onPressNotificationIcon}>
              <View style={styles.notificationIconSubContainer}>
                {this.props.notifications > 0 && (
                  <View style={styles.countContainer}>
                    <Text style={styles.notificationCount}>
                      {this.props.notifications}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

Toolbar.defaultProps = defaultProps;
Toolbar.propTypes = propTypes;

export default Toolbar;
