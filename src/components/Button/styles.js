import {StyleSheet, Platform, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 6,
  },

  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 6 : 6,
    backgroundColor: 'rgb(0,38,127)',
    textAlign: 'center',
    lineHeight: 24,
    width: Dimensions.get('window').width - 20,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
    padding: 19,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default styles;
