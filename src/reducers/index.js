import { combineReducers } from 'redux';
import orders from './orders';
import counterReducer from "./counter";


const combinedReducer = combineReducers({
    orders: orders,
    counter: counterReducer
    // isLogged: loggedReducer,
    // alertReducer
});

export default combinedReducer;