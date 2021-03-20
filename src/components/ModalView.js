import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import InfoCard from './InfoCard';

export default function ModalView({
  modalVisible,
  handleCloseAction = () => {},
  children,
  fullWidth,
  height,
  ellipsis,
  isBlur,
  forceUpgrade = false,
}) {
  return (
    <Modal
      // animationType="fade"
      transparent
      onRequestClose={() => {}}
      visible={modalVisible}>
      {isBlur && (
        <BlurView
          blurType={ellipsis ? 'dark' : 'light'}
          blurAmount={ellipsis ? 10 : 25}
          reducedTransparencyFallbackColor="black"
          style={styles.absolute}
        />
      )}
      {forceUpgrade ? (
        <View style={styles.forceUpgradeView}>{children}</View>
      ) : (
        <InfoCard
          handleCloseAction={handleCloseAction}
          fullWidth={fullWidth}
          height={height}
          ellipsis={ellipsis}>
          {children}
        </InfoCard>
      )}
    </Modal>
  );
}
const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  forceUpgradeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
