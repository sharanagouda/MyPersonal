/* eslint-disable no-underscore-dangle */
import {Share, Platform} from 'react-native';

const onShare = async (data) => {
  // let text = 'Download OTTplay App Now ';
  let shareContent;
  try {
    shareContent = {
      subject: 'Share Link',
      title: ` MyPersonal Cash Counter`,
      message: `${data}`,
    };
    // message: `Discover where to watch ${name} on OTTplay,
    // Android: ${SHARE_PLAYSTORE}
    // iOS: ${SHARE_APPSTORE}`,

    Share.share(shareContent, {
      // Android only:
      dialogTitle: 'MyPersonal App',
      // iOS only:
      excludedActivityTypes: [],
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export default onShare;
