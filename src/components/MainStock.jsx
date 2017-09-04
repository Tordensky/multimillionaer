import React, { PureComponent } from 'react';
import { formaterKroner } from '../util/index';
import { BoardRow, BoardCell } from './Layout';

export class MainStocks extends PureComponent {
    render() {
        const { data, onChangeStockPrice } = this.props;
        return (
            <BoardRow>
                <BoardCell>Aksjer</BoardCell>
                {data.map(stock => <MainStock key={stock.get('id')} stock={stock}
                                              onChangeStockPrice={onChangeStockPrice} />)}
            </BoardRow>
        );
    }
}

class MainStock extends PureComponent {
    constructor(props) {
        super(props);
        this.onPriceDown = this.onPriceDown.bind(this);
        this.onPriceUp = this.onPriceUp.bind(this);
    }

    onPriceUp() {
        this.props.onChangeStockPrice(this.props.stock.levelUp());
    }

    onPriceDown() {
        this.props.onChangeStockPrice(this.props.stock.levelDown());
    }

    render() {
        const { stock } = this.props;
        return (
            <BoardCell color={stock.color} key={stock.get('id')}>
                <div>{stock.name}</div>
                <div>Pris: {formaterKroner(stock.getValue())} kr</div>
                <div>Til salgs: {stock.available * 10}%</div>
                <div>Kursnivå: {stock.level}</div>
                <div>
                    <button onClick={this.onPriceUp}>Øk aksjekurs</button>
                    <button onClick={this.onPriceDown}>Senk aksjekurs</button>
                </div>
            </BoardCell>
        );
    }
}