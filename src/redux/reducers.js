import { combineReducers } from 'redux';
import getEvents from './events/reducer';
import addEvents from './favorite/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
     key: 'root',
     storage,
     whitelist: ['addEvents']
};

const rootReducer = combineReducers({
     getEvents,
     addEvents
});

export default persistReducer(persistConfig, rootReducer);
