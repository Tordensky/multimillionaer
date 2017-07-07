import { Map, Record, List } from 'immutable';
import { StocksInitialState } from './stockReducer';

const Players = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6'];

class PlayerRecord extends Record({
    playerID: '',
    stocks: List()
}) {
    viewModel(stockInfo = Map()) {
        const playerStocksViewModel = this.stocks.map(stock => {
            const calculatedValue = stockInfo.get(stock.stockID).calculateStockValue(stock.count);
            return stock.set('value', calculatedValue);
        }).toList();

        return Map({
            playerID: this.playerID,
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
    return new PlayerRecord({ playerID, stocks })
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
    default:
        return state;
    }
}
