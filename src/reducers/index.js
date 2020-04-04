import quantity from './quantity'
// import price from './price';
import {combineReducers} from 'redux';

 const allreducers = combineReducers({
     quantity:quantity,
    //  price:price
 })

 export default allreducers;