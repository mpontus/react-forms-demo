import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form/immutable';

const reducer = combineReducers({ form });
const store = createStore(reducer);

export default store;

