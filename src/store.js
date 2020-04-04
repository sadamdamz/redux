import quantity from './reducers/quantity'
import {createStore} from 'redux';

const store = createStore(quantity, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store