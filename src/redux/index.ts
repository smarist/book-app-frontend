import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import reduxReducer from './reducers/combineReducer';

// const persistedReducer = persistReducer(persistConfig, reduxReducer);
const store = createStore(reduxReducer, applyMiddleware(thunkMiddleware));

const persistor = persistStore(store);

export { store, persistor };
