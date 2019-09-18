import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

const middleware = [thunk, logger];

export const store = createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
export default { store, persistor };
