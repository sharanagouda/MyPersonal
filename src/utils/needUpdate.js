// eslint-disable-next-line consistent-return
function checkIfUpdateNeeded(currentVersion, recievedVersion) {
  const partsNumberA = currentVersion.split('.');
  const partsNumberB = recievedVersion.split('.');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < partsNumberA.length; i++) {
    // eslint-disable-next-line radix
    const currentAppVersion = parseInt(partsNumberA[i]);
    // eslint-disable-next-line radix
    const recievedAppVersion = parseInt(partsNumberB[i]);

    // currentVerions bigger than recievedVerion
    // eslint-disable-next-line no-restricted-globals
    if (currentAppVersion > recievedAppVersion || isNaN(recievedAppVersion)) {
      return 1;
    }

    // recievedVerion bigger than currentVerions
    if (currentAppVersion < recievedAppVersion) {
      return -1;
    }
  }
  if (currentVersion === recievedVersion) {
    return 0;
  }
}

export default checkIfUpdateNeeded;
