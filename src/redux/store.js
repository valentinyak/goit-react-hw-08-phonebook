// import { combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contacts-reducer';
// import authReducer from './auth/auth-slice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   auth: authReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contacts-reducer';
import authReducer from './auth/auth-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

export { store, persistor };
