import { Map, Record, List } from 'immutable';
import { StocksInitialState } from './stockReducer';
import { EDIT_PLAYER_NAME, STOCK_TRANSACTION } from '../actions/index';

const Players = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6'];

class PlayerRecord extends Record({
        playerID: '',
        name: 'test',
        stocks: List(),
}) {
    viewModel(stockInfo = Map()) {
        const playerStocksViewModel = this.stocks.map(stock => {
            const mainStock = stockInfo.get(stock.stockID);
            const calculatedValue = mainStock.calculateStockValue(stock.count);
            return stock.set('value', calculatedValue);
        }).toList();

        return Map({
            playerID: this.playerID,
            name: this.name,
            stocks: playerStocksViewModel,
        });
    }
}

class PlayerStockRecord extends Record({
    stockID: '',
    count: 0,
    color: '#fff',
    value: 0,
}) {

}

function newPlayer(playerID) {
    const stocks = StocksInitialState.map((stockData, stockID) => new PlayerStockRecord({
        stockID: stockID,
        color: stockData.color,
    }));
    return new PlayerRecord({ playerID, stocks, name: playerID })
}

function defaultState() {
    let players = Map();
    Players.forEach(playerID => {
        players = players.set(playerID, newPlayer(playerID))
    });

    return players;
}

export function playerReducer(state = defaultState(), action) {
    switch (action.type) {
    case STOCK_TRANSACTION:
        return state.withMutations(s => {
            action.payload.forEach(transaction => {
                if (s.has(transaction.fromId)) {
                    s = s.updateIn([transaction.fromId, 'stocks', transaction.stockID, 'count'], c => c - transaction.count )
                }

                if (s.has(transaction.toId)) {
                    s = s.updateIn([transaction.toId, 'stocks', transaction.stockID, 'count'], c => c + transaction.count )
                }
                return s;
            })
        });

    case EDIT_PLAYER_NAME:
        return state.setIn([action.payload.playerID, 'name'], action.payload.name);

    default:
        return state;
    }
}
