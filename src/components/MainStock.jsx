import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { formaterKroner } from '../util/index';
import {BoardRow, BoardCell, StockBackground, StockInformation} from './Layout';


const StockName = styled.div`
    font-size: 11px;
    font-weight: bold;
    height: 70px;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    text-align: center;
`;

export class MainStocks extends PureComponent {
    constructor(props) {
        super(props);
        this.renderStocks = this.renderStocks.bind(this);
    }

    renderStocks() {
        return this.props.data.map(stock =>
            <MainStock
                key={stock.get('id')}
                stock={stock}
                onChangeStockPrice={this.props.onChangeStockPrice}
            />);
    }

    render() {
        return (
            <BoardRow>
                <BoardCell style={{ opacity: 0 }} />
                {this.renderStocks()}
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
            <BoardCell color={stock.get('color')} key={stock.get('id')}>
                <StockInformation>
                    <StockName>
                        {stock.name.map((n, idx) => <div>{`${n}${idx === stock.name.length -2 ? ' og' : ','}`}</div>)}
                    </StockName>
                    <div>Pris: {formaterKroner(stock.getValue())} kr</div>
                    <div>Til salgs: {stock.available * 10}%</div>
                    <div>Kursnivå: {stock.level}</div>
                    <div>
                        <button onClick={this.onPriceUp}>Øk aksjekurs</button>
                        <button onClick={this.onPriceDown}>Senk aksjekurs</button>
                    </div>
                </StockInformation>
            </BoardCell>
        );
    }
}