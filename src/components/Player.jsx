import React, { PureComponent } from 'react';
import { formaterKroner } from '../util/index';
import { PlayerStock } from './PlayerStock';
import { StockTransactionRecord } from '../actions/index';
import { BoardRow, BoardCell } from './Layout';

export class Player extends PureComponent {
    constructor(props) {
        super(props);
        this.onTradeStock = this.onTradeStock.bind(this);
        this.onEditName = this.onEditName.bind(this);
    }

    onTradeStock(stockID, count = 0) {
        this.props.onStockTransaction(new StockTransactionRecord({
            toId: this.props.data.get('playerID'),
            fromId: 'bank',
            stockID,
            count,
        }))
    }

    onEditName(e) {
        this.props.onEditPlayerName(this.props.data.get('playerID'), e.target.value);
    }

    render() {
        const { data } = this.props;
        const stocks = data.get('stocks')
        .map(stockData => <PlayerStock key={stockData.get('stockID')} data={stockData} onTradeStock={this.onTradeStock} />);

        const totalValue = data.get('stocks').reduce((total, stock) => total + stock.get('value', 0), 0);

        return (
            <BoardRow>
                <BoardCell>
                    <input value={data.get('name', '')} onChange={this.onEditName} />
                    <div>Totalt: {formaterKroner(totalValue)} kr</div>
                </BoardCell>
                {stocks}
            </BoardRow>
        );
    }
}
