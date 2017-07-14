import { List } from 'immutable';
import { STOCK_TRANSACTION } from '../actions/index';


export function historikkReducer(state = List(), action) {
    switch (action.type) {
    case STOCK_TRANSACTION:
        return state.push(...action.payload);

    default:
        return state;
    }
}