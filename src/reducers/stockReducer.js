import { Map, OrderedMap, Record } from 'immutable';
import { CHANGE_MAIN_STOCK_VALUES, STOCK_TRANSACTION } from '../actions/index';

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

    levelUp() {
        return this.update('level', l => (l < StockPrice.length) ? l + 1 : l);
    }

    levelDown() {
        return this.update('level', l => (l > 0) ? l - 1 : l); //this.update('level', l => l > 0 ? l + 1 : l);
    }
}

const StockPrice = [
    1000,
    2000,
    3000,
    4000,
    5000,
    6000,
    7000,
    8000,
    9000,
    10000,
    11000,
    12000,
    14000,
    16000,
    18000,
    20000,
    22000,
    25000,
    28000,
    30000,
    32000,
    34000,
    36000,
    38000,
    39000,
    40000,
];

export const StocksInitialState = OrderedMap({
    STOCK_1: new StockRecord({
        id: 'STOCK_1',
        level: 3,
        name: 'Kirkeveien, Frognerveien',
        available: 10,
        color: '#1091ed',
    }),

    STOCK_2: new StockRecord({
        id: 'STOCK_2',
        level: 4,
        name: 'Kongens gate, Dronningens gate, Prinsens gate',
        available: 10,
        color: '#eac3c4',
    }),

    STOCK_3: new StockRecord({
        id: 'STOCK_3',
        level: 5,
        name: 'Tordenskolds gate, Grensen, Nedre slottsgate',
        available: 10,
        color: '#b6c203',
    }),

    STOCK_4: new StockRecord({
        id: 'STOCK_4',
        level: 6,
        name: 'Drammensveien, Mosseveien, Trondheimsveien',
        available: 10,
        color: '#cbc7bd',
    }),

    STOCK_5: new StockRecord({
        id: 'STOCK_5',
        level: 7,
        name: 'Gyldenløvs gate',
        available: 10,
        color: '#eee063',
    }),

    STOCK_6: new StockRecord({
        id: 'STOCK_6',
        level: 8,
        name: 'Slemdal, Holmenkollen, Bygdøy',
        available: 10,
        color: '#f96b96',
    }),

    STOCK_7: new StockRecord({
        id: 'STOCK_7',
        level: 9,
        name: 'Stortingsgaten, Studenterlunden, Karl Johans gate',
        available: 10,
        color: '#edb96e',
    }),

    STOCK_8: new StockRecord({
        id: 'STOCK_8',
        level: 10,
        name: 'Sinsen, Vålerengen, Lambertseter',
        available: 10,
        color: '#f0d901',
    }),

    STOCK_9: new StockRecord({
        id: 'STOCK_9',
        level: 11,
        name: 'Aker Brygge',
        available: 10,
        color: '#96c1b4',
    }),

    STOCK_10: new StockRecord({
        id: 'STOCK_10',
        level: 12,
        name: 'Slottsplassen, Ullevoll Hageby',
        available: 10,
        color: '#ec690c',
    }),
});

const defualtState = StocksInitialState;
export function stockReducer(state = defualtState, action) {
    switch (action.type) {
    case CHANGE_MAIN_STOCK_VALUES:
        return state.withMutations(s => {
            action.payload.forEach(stock => {
               s = s.set(stock.id, stock);
            });
            return s;
        });

    case STOCK_TRANSACTION:
        return state.withMutations(s => {
            action.payload.forEach(transaction => {
                if (transaction.fromId === 'bank') {
                    s = s.update(transaction.stockID, s => s.update('available', count => count - transaction.count));
                }

                if (transaction.toId === 'bank') {
                    s = s.update(transaction.stockID, s => s.update('available', count => count + transaction.count));
                }

                return s;
            })
        });

    default:
        return state;
    }
}
