import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  toolbarContainer: {
    height: 60,
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
  },
  oceanLogoContainer: {
    flex: 1.8,
    alignItems: 'center',
    paddingTop: 50,
    position: 'relative',
  },
  oceanLogoImage: {
    paddingTop: 30,
    width: 105,
    height: 60,
    zIndex: 999,
    position: 'absolute',
  },
  leftIconContainer: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftArrowImage: {
    width: 25,
    height: 25,
  },
  backArrowContainer: {
    flex: 1,
  },
  backText: {
    color: 'white',
    fontSize: 18,
    // fontFamily:"Gotham-Book",
  },
  notificationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  notificationIconImage: {
    width: 25,
    height: 25,
  },
  notificationIconSubContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  notificationCount: {
    color: 'white',
    fontSize: 11,
  },
  countContainer: {
    backgroundColor: 'blue',
    height: 20,
    width: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    right: 15,
    top: -5,
  },
});

export default styles;
