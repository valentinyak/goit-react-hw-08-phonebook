import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import authReducer from './auth/auth-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
