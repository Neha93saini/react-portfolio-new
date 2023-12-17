import { createStore } from 'redux';
import rootReducer from './components/projects/Redux-TODO/reducer'; //eslint-disable-line

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ //eslint-disable-line
    && window.__REDUX_DEVTOOLS_EXTENSION__()); //eslint-disable-line
export default store;
