import { createStore, combineReducers, applyMiddleware } from '../../../Library/Caches/typescript/2.9/node_modules/redux';
import verbReducer, * as FromVerb from './grammar/verb/reducer';
import thunk from 'redux-thunk';

const VERB = 'VERB';

const rootReducer = combineReducers({
  [VERB]: verbReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);

export function getVerbs(store) {
    return FromVerb.getVerbs(store[VERB]);
}

export function getVerbById(store) {
  return FromVerb.getVerbById(store[VERB]);
}

export default store;