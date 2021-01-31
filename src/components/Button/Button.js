import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

const propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
};

const defaultProps = {
  title: 'Button',
  backgroundColor: 'rgb(0, 38, 127)',
  iconName: '',
  onPress: () => {},
  disabled: false,
  style: {},
  textColor: 'White',
};

class Button extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={this.props.onPress}
          disabled={this.props.disabled}>
          <View
            style={[
              styles.buttonStyle,
              {backgroundColor: this.props.backgroundColor},
              {height: this.props.height},
              this.props.style,
            ]}>
            {this.props.iconName.length > 0 && (
              <Icon
                name={this.props.iconName}
                type="material-community"
                color="#ffffff"
                iconStyle={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginRight: 25,
                  marginLeft: -30,
                }}
              />
            )}
            <Text
              style={[
                styles.buttonTitle,
                this.props.textColor,
                this.props.textStyle,
              ]}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
