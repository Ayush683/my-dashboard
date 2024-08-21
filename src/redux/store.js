import { createStore, combineReducers } from 'redux';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
});

const store = createStore(rootReducer);

export default store;
