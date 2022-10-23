import { composeWithDevTools } from '@redux-devtools/extension';
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pokemonReducer from './pokemon/reducer';

/**
 * Combine reducers and Creating store:
 * By default when creating store, functions accepts only one reducer, but thanks to combineReducer we can combine multiple reducers.
 * Also we can set some middlewares that goes between action and reducer.
 */
const reducers = combineReducers({
  pokemonReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
