import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {StoreProvider} from './reducers/index';
import AppStack from './navigations/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import OnBoardingStack from './navigations/onboardStack';
import SplashScreen from 'react-native-splash-screen';
import {userHasOnboarded} from './utils';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import checkIfUpdateNeeded from './utils/needUpdate';
import VersionCheck from 'react-native-version-check';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import * as Font from 'expo-font';

import {store, persistor} from './config/store';

/* add these in info.plist
	<key>UIAppFonts</key>
<array>
 <string>AntDesign.ttf</string>
 <string>Entypo.ttf</string>
 <string>EvilIcons.ttf</string>
 <string>Feather.ttf</string>
 <string>FontAwesome.ttf</string>
 <string>FontAwesome5_Brands.ttf</string>
 <string>FontAwesome5_Regular.ttf</string>
 <string>FontAwesome5_Solid.ttf</string>
 <string>Foundation.ttf</string>
 <string>Ionicons.ttf</string>
 <string>MaterialIcons.ttf</string>
 <string>MaterialCommunityIcons.ttf</string>
 <string>SimpleLineIcons.ttf</string>
 <string>Octicons.ttf</string>
 <string>Zocial.ttf</string>
 		<string>Montserrat-Regular.ttf</string>
		<string>Montserrat-Light.ttf</string>
		<string>Montserrat-Bold.ttf</string>
		<string>Montserrat-Medium.ttf</string>
		<string>Montserrat-SemiBold.ttf</string>
		<string>Montserrat-ExtraBold.ttf</string>
		<string>Montserrat-Black.ttf</string>
		<string>Fontisto.ttf</string>
</array>
*/

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false,
      userOnboarded: false,
      showForceUpgradeAlert: false,
      updateMessage:
        'This version of the app is not supported. Please update App to continue using it.',
      forceUpgradeDeviceData: [],
    };
  }
  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      // console.disableYellowBox = true;
      await SplashScreen.hide();
    } catch (e) {
      // console.warn(e);
    }
    this.checkUpdateNeeded(Platform.OS);
    this.prepareResources();
  }

  checkUpdateNeeded = async (platform) => {
    const latestVersion = await VersionCheck.getLatestVersion();
    const currentVersion = VersionCheck.getCurrentVersion();
    //  console.log('currentVersion of APP', currentVersion)
    if (checkIfUpdateNeeded(currentVersion, latestVersion)) {
      this.setState({
        showForceUpgradeAlert: true,
        updateMessage: this.state.updateMessage,
      });
    }
    // axios.get(`${Config.APP_API_URL}v3/mobile/version?platform=${platform}`, {
    //   headers
    // })
    //   .then((response) => {
    //     const { result } = response.data
    //     if (result && !helper.isEmptyArray(result)) {
    //       this.setState({
    //         forceUpgradeDeviceData: result
    //       })
    //       const { forceUpgradeDeviceData } = this.state
    //       if (forceUpgradeDeviceData && !helper.isEmptyArray(forceUpgradeDeviceData)) {
    //         forceUpgradeDeviceData.forEach((item) => {
    //           // Return 1  if currentVersion > item.version
    //           // Return -1 if currentVersion < item.version
    //           // Return 0  if currentVersion == item.version
    //           //  console.log('items for upgrade', item)
    //           if (item.version && checkIfUpdateNeeded(currentVersion, item.version) === 0
    //            && item.type === FORCE_UPGRADE_TYPES.SPECIFIC_VERSIOM) {
    //             this.setState({
    //               showForceUpgradeAlert: true,
    //               updateMessage: item.message
    //             })
    //           }
    //           //  console.log('compare versions', this.compareVersions(currentVersion, item.version))
    //           if (item.version && checkIfUpdateNeeded(currentVersion, item.version) === -1
    //            && item.type === FORCE_UPGRADE_TYPES.MINIMUN_VERSION) {
    //             this.setState({
    //               showForceUpgradeAlert: true,
    //               updateMessage: item.message
    //             })
    //           }
    //         })
    //       }
    //     }
    //   })
    //   .catch(() => {
    //     // console.log('error force upgrade', error)
    //   })
  };
  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    // await this.loadFonts();
    Icon.loadFont();
    SplashScreen.hide();
    userHasOnboarded().then((value) => {
      this.setState({
        userOnboarded: value,
        appIsReady: true,
      });
    });
  };

  // loadFonts = async () => {
  //   await Font.loadAsync({
  //     // This'll be used in font-family
  //     'Montserrat-Regular': regular,
  //     'Montserrat-Light': light,
  //     'Montserrat-Medium': medium,
  //     'Montserrat-Bold': bold,
  //     'Montserrat-SemiBold': semiBold,
  //     'Montserrat-ExtraBold': extraBold,
  //   });
  // };

  render() {
    const {userOnboarded, showForceUpgradeAlert} = this.state;
    console.log('storeretun', this.state);
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer fallback={<Text>Loading...</Text>}>
              {!userOnboarded ? <OnBoardingStack /> : <AppStack />}
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
