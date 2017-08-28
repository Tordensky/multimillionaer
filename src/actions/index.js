import { Record } from 'immutable';

export const CHANGE_MAIN_STOCK_VALUES = 'CHANGE_MAIN_STOCK_VALUES';
export function changeMainStockValues(...stocks) {
    return {
        type: CHANGE_MAIN_STOCK_VALUES,
        payload: stocks,
    }
}

export class StockTransactionRecord extends Record({ toId: '', fromId: '', stockID: '', count: 0 }) {

}

export const STOCK_TRANSACTION = 'STOCK_TRANSACTION';
export function stockTransaction(...transactions) {
    return {
        type: STOCK_TRANSACTION,
        payload: transactions,
    }
}

export const EDIT_PLAYER_NAME = 'EDIT_PLAYER_NAME';
export function editPlayerName(playerID, name) {
    return {
        type: EDIT_PLAYER_NAME,
        payload: {
            playerID,
            name
        },
    }
}

