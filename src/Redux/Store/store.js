import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducer/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Apply middleware including thunk correctly
export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk) // Use thunk middleware correctly
);

export const persistor = persistStore(store);
