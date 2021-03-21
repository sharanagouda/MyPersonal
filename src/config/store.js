import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import appReducer from '../reducers/app-reducer';
import bookreducer from '../reducers/book-reducers';
import cashCounterReducer from '../reducers/cash-counter-reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks'],
};

const rootReducer = combineReducers({
  appReducer: persistReducer(persistConfig, appReducer),
  booksReducer: persistReducer(persistConfig, bookreducer),
  cashCounterReducer: persistReducer(persistConfig, cashCounterReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
