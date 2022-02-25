import { combineReducers } from 'redux';
import products from './Products';
import inventory from './Inventory';
import client from './Client';

const rootReducer = combineReducers({
    products,
    inventory,
    client
})

export default rootReducer;