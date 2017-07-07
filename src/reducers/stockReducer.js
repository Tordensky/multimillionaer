import { Map, OrderedMap, Record } from 'immutable';

class StockRecord extends Record(
    {
        id: null,
        name: null,
        level: 0,
        available: 10,
        color: '#fff',
    }
) {
    getValue() {
        return StockPrice[this.level];
    }

    calculateStockValue(numStocks) {
        return this.getValue() * numStocks;
    }
}

const StockPrice = {
    1: 1000,
    2: 2000,
    3: 3000,
    4: 4000,
    5: 5000,
    6: 6000,
    7: 7000,
    8: 8000,
    9: 9000,
    10: 10000,
};

export const StocksInitialState = OrderedMap({
    STOCK_1: new StockRecord({
        id: 'STOCK_1',
        level: 1,
        name: 'lorem STOCK_1',
        available: 10,
        color: '#1091ed',
    }),

    STOCK_2: new StockRecord({
        id: 'STOCK_2',
        level: 2,
        name: 'lorem STOCK_2',
        available: 10,
        color: '#eac3c4',
    }),

    STOCK_3: new StockRecord({
        id: 'STOCK_3',
        level: 3,
        name: 'lorem STOCK_3',
        available: 10,
        color: '#b6c203',
    }),

    STOCK_4: new StockRecord({
        id: 'STOCK_4',
        level: 4,
        name: 'lorem STOCK_4',
        available: 10,
        color: '#cbc7bd',
    }),

    STOCK_5: new StockRecord({
        id: 'STOCK_5',
        level: 5,
        name: 'lorem STOCK_5',
        available: 10,
        color: '#eee063',
    }),

    STOCK_6: new StockRecord({
        id: 'STOCK_6',
        level: 6,
        name: 'lorem STOCK_6',
        available: 10,
        color: '#f96b96',
    }),

    STOCK_7: new StockRecord({
        id: 'STOCK_7',
        level: 7,
        name: 'lorem STOCK_7',
        available: 10,
        color: '#edb96e',
    }),

    STOCK_8: new StockRecord({
        id: 'STOCK_8',
        level: 8,
        name: 'lorem STOCK_8',
        available: 10,
        color: '#f0d901',
    }),

    STOCK_9: new StockRecord({
        id: 'STOCK_9',
        level: 9,
        name: 'lorem STOCK_9',
        available: 10,
        color: '#96c1b4',
    }),

    STOCK_10: new StockRecord({
        id: 'STOCK_10',
        level: 10,
        name: 'lorem STOCK_10',
        available: 10,
        color: '#ec690c',
    }),
});

const defualtState = StocksInitialState;
export function stockReducer(state = defualtState, action) {
    switch (action.type) {
    default:
        return state;
    }
}
