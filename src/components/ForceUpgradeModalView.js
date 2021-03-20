import React from 'react';
import ModalView from 'components/ModalView';
import ForceUpgrade from './ForceUpgrade';

const ForceUpgradeModalView = ({
  toggleDisplayModal = () => {},
  showModal = false,
  messageForUpdate = '',
}) => {
  // const { isShowingAddToWatchList, toggleAddToWatchListDisplay } = useModal();
  const handleHideModal = () => {
    toggleDisplayModal();
  };
  return (
    <ModalView
      height
      isBlur
      forceUpgrade
      modalVisible={showModal}
      handleCloseAction={toggleDisplayModal}>
      <ForceUpgrade
        hideModal={() => handleHideModal()}
        messageForUpdate={messageForUpdate}
      />
    </ModalView>
  );
};

export default ForceUpgradeModalView;
