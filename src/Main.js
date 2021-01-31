import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {StoreProvider} from './reducers/index';
import AppStack from './navigations/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import OnBoardingStack from './navigations/onboardStack';
import SplashScreen from 'react-native-splash-screen';
import {userHasOnboarded} from './utils';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

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
</array>
*/

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false,
      userOnboarded: false,
      showForceUpgradeAlert: false,
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
    this.prepareResources();
  }

  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    SplashScreen.hide();
    userHasOnboarded().then((value) => {
      this.setState({
        userOnboarded: value,
        appIsReady: true,
      });
    });
  };

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
