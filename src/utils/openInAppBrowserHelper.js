import {Linking, Platform} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

const openLink = async (url) => {
  const config = {
    // iOS Properties
    dismissButtonStyle: 'cancel',
    preferredBarTintColor: '#100721',
    preferredControlTintColor: 'white',
    readerMode: false,
    animated: true,
    modalPresentationStyle: 'fullScreen',
    modalTransitionStyle: 'coverVertical',
    modalEnabled: true,
    enableBarCollapsing: false,
    // Android Properties
    showTitle: true,
    toolbarColor: '#100721',
    secondaryToolbarColor: '#100721',
    enableUrlBarHiding: true,
    enableDefaultShare: true,
    forceCloseOnRedirection: false,
    hasBackButton: true,
    // Specify full animation resource identifier(package:anim/name)
    // or only resource name(in case of animation bundled with app).
    headers: {
      'my-custom-header': 'OTTplay',
    },
  };

  if (url && (url.startsWith('www') || url.startsWith('http'))) {
    let formattedUrl = url;
    if (formattedUrl.startsWith('www')) {
      formattedUrl = `https://${formattedUrl}`;
    }
    if (Platform.OS === 'ios') {
      Linking.openURL(formattedUrl);
    } else {
      try {
        if (await InAppBrowser.isAvailable()) {
          await InAppBrowser.open(formattedUrl, config);
        } else {
          Linking.openURL(formattedUrl);
        }
      } catch (error) {
        await InAppBrowser.close();
        InAppBrowser.open(formattedUrl, config);
      }
    }
  }
};
export default openLink;
