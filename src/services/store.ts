import {
	compose,
	legacy_createStore as CreateStore,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/root-reducer';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
	applyMiddleware(
		thunk
	),
);

export const store = CreateStore(rootReducer, enhancer);
