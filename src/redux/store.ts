import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // You can choose the storage engine
import authReducer from './features/auth-slice';
import orgReducer from './features/org-slice';

// Define a persistConfig for Redux Persist
const persistConfigauthReducer = {
  key: 'root', // Key for storage
  storage, // The storage engine to use (localStorage, AsyncStorage, etc.)
  // Other options like transforms, blacklist, whitelist, etc.
};
const persistConfigorgReducer = {
  key: 'root1', // Key for storage
  storage, // The storage engine to use (localStorage, AsyncStorage, etc.)
  // Other options like transforms, blacklist, whitelist, etc.
};

// Create a persisted reducer using persistReducer
const persistedAuthReducer = persistReducer(persistConfigauthReducer, authReducer);
const persistedOrgReducer = persistReducer(persistConfigorgReducer, orgReducer);

// Create your Redux store with the persisted reducer
export const store = configureStore({
  reducer: {
    authReducer: persistedAuthReducer, // Use the persisted reducer
    orgReducer: persistedOrgReducer,

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create a custom hook for selecting state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Create a persistor and export it for rehydration
export const persistor = persistStore(store);
