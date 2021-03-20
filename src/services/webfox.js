// import React, {
//   createContext, useState, useEffect, useRef, useContext
// } from 'react'
// import AsyncStorage from '@react-native-community/async-storage';
// import { AppState } from 'react-native';
// import webfox from './webbase';
// // import recommedationWebfox from './recommendation-webbase';

// import { StoreContext, actions } from './webstore';
// import helper from '../utils/helper';

// export const WebfoxContext = createContext({});

// // Async Storage Key constants
// export const STORAGE_KEYS = {
//   APP_STATE_LANGUAGES: 'languages',
//   APP_STATE_ONBOARDINGMOVIES: 'onboardingMovies',
//   APP_STATE_OTT_PROVIDERS: 'ottProviders',
//   APP_STATE_USER_PROFILE: 'userProfile',
//   APP_STATE_WATCHLIST: 'watchlist',
//   APP_STATE_SEARCH_RESULTS: 'searchResults',
//   APP_STATE_NOTIFICATIONS: 'notifications',
//   APP_STATE_VIDEO_NOTIFICATIONS: 'videoNotifications',
//   APP_STATE_ONBOARDCASTS: 'onboardCasts',
//   APP_STATE_ONBOARDCREWS: 'onboardCrews',
//   APP_STATE_ONBOARDGENRES: 'onboardGenres',
//   APP_STATE_RECONSOLE: 'recommendationsSettings'
// };

// // Fetch Policy
// export const FETCH_POLICY = {
//   NETWORK: 'network',
//   CACHE: 'cache',
//   // CACHE_AND_NETWORK: 'cache-network'
// }

// const WebfoxProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const appState = useRef(AppState.currentState);
//   const { state, actionDispatch } = useContext(StoreContext);

//   useEffect(() => {
//     AppState.addEventListener('change', handleAppStateChange);

//     return () => {
//       AppState.removeEventListener('change', handleAppStateChange);
//     };
//   }, [state]);

//   useEffect(() => {
//     // On app launch, restore the app state from Async Storage
//     retrieveData()
//   }, []);

//   const handleAppStateChange = (nextAppState) => {
//     // if (
//     //   appState.current.match(/inactive|background/)
//     //   && nextAppState === 'active'
//     // ) {
//     //   console.log('App has come to the foreground!');
//     // }
//     if (appState.current === 'active' && nextAppState.match(/inactive|background/)) {
//       // console.log('App goes to background');
//       // Save the requried app state in Async Storage
//       storeData(state)
//     }

//     appState.current = nextAppState;
//   };

//   const storeData = async (item) => {
//     try {
//       const keys = [
//         [STORAGE_KEYS.APP_STATE_LANGUAGES, JSON.stringify(item.languages)],
//         [STORAGE_KEYS.APP_STATE_OTT_PROVIDERS, JSON.stringify(item.ottProviders)],
//         [STORAGE_KEYS.APP_STATE_ONBOARDINGMOVIES, JSON.stringify(item.onboardingMovies)],
//         [STORAGE_KEYS.APP_STATE_WATCHLIST, JSON.stringify(item.watchlist)],
//         [STORAGE_KEYS.APP_STATE_USER_PROFILE, JSON.stringify(item.userProfile)],
//         [STORAGE_KEYS.APP_STATE_NOTIFICATIONS, JSON.stringify(item.notifications)],
//         [STORAGE_KEYS.APP_STATE_VIDEO_NOTIFICATIONS, JSON.stringify(item.videoNotifications)],
//         [STORAGE_KEYS.APP_STATE_ONBOARDCASTS, JSON.stringify(item.onboardCasts)],
//         [STORAGE_KEYS.APP_STATE_ONBOARDCREWS, JSON.stringify(item.onboardCrews)],
//         [STORAGE_KEYS.APP_STATE_ONBOARDGENRES, JSON.stringify(item.onboardGenres)],
//         [STORAGE_KEYS.APP_STATE_SEARCH_RESULTS, JSON.stringify(item.searchResults)],
//         [STORAGE_KEYS.APP_STATE_RECONSOLE, JSON.stringify(item.recommendationsSettings)]
//       ]
//       AsyncStorage.multiSet(keys, () => {
//         // console.log('Saved data with multiset method')
//       });
//     } catch (error) {
//       // console.log(error.message);
//     }
//   }

//   const retrieveData = async () => {
//     try {
//       const payload = {}
//       const allKeys = await AsyncStorage.getAllKeys()
//       if (allKeys.length > 0) {
//         const keys = [
//           STORAGE_KEYS.APP_STATE_LANGUAGES,
//           STORAGE_KEYS.APP_STATE_OTT_PROVIDERS,
//           STORAGE_KEYS.APP_STATE_ONBOARDINGMOVIES,
//           STORAGE_KEYS.APP_STATE_ONBOARDCASTS,
//           STORAGE_KEYS.APP_STATE_ONBOARDCREWS,
//           STORAGE_KEYS.APP_STATE_ONBOARDGENRES,
//           STORAGE_KEYS.APP_STATE_USER_PROFILE,
//           STORAGE_KEYS.APP_STATE_WATCHLIST,
//           STORAGE_KEYS.APP_STATE_NOTIFICATIONS,
//           STORAGE_KEYS.APP_STATE_VIDEO_NOTIFICATIONS,
//           STORAGE_KEYS.APP_STATE_SEARCH_RESULTS,
//           STORAGE_KEYS.APP_STATE_RECONSOLE,
//         ];
//         await AsyncStorage.multiGet(keys, (err, stores) => {
//           stores.map((result, i, store) => {
//             const key = store[i][0]; // shows key
//             const value = JSON.parse(store[i][1]); // shows value
//             if (value !== null) {
//               payload[key] = value;
//             }
//             return result
//           });
//         });
//         if (!helper.isEmptyObject(payload)) {
//           actionDispatch(actions.RETRIEVE_APP_STATE, payload);
//         }
//       }
//     } catch (error) {
//       // console.log(error.message);
//     }
//   }
//   return (
//     <WebfoxContext.Provider
//       value={{
//         webfox,
//         loading,
//         setLoading,
//         loadingMore,
//         setLoadingMore,
//         // web store
//         webstore: state,
//         actions,
//         actionDispatch
//       }}
//     >
//       {children}
//     </WebfoxContext.Provider>
//   );
// }

// export default WebfoxProvider;
