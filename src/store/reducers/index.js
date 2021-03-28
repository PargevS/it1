import {combineReducers} from 'redux';
//* import of components and developer packages
import traderReducer from "./tradrReducer";
import profitReducer from "./profitReducer";



export const rootReducer = combineReducers({
    trade: traderReducer,
    profit: profitReducer
});