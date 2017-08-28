import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { formaterKroner } from '../util/index';

const MainStocksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StockInfo = styled.div`
    width: 100%;
    margin: 5px;
    padding: 10px;
    border: solid black 1px;
`;

const MainStockContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 2px;
    padding: 5px;
    border: solid black 1px;
`;

export class MainStocks extends PureComponent {
    render() {
        const { data, onChangeStockPrice } = this.props;
        return (
            <MainStocksContainer>
                <StockInfo>Aksjer</StockInfo>
                {data.map(stock => <MainStock key={stock.get('id')} stock={stock}
                                              onChangeStockPrice={onChangeStockPrice} />)}
            </MainStocksContainer>
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
            <MainStockContainer key={stock.get('id')} style={{ backgroundColor: stock.color }}>
                <div>{stock.name}</div>
                <div>Pris: {formaterKroner(stock.getValue())} kr</div>
                <div>Til salgs: {stock.available * 10}%</div>
                <div>Kursnivå: {stock.level}</div>
                <div>
                    <button onClick={this.onPriceUp}>Øk aksjekurs</button>
                    <button onClick={this.onPriceDown}>Senk aksjekurs</button>
                </div>
            </MainStockContainer>
        );
    }
}