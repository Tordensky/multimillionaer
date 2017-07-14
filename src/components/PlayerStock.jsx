import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StockContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 2px;
    padding: 5px;
    border: solid black 1px;
`;

const StockCount = styled.div`
    font-size: 20px;
    text-align: center;
`;

const StockValue = styled.div`
    font-size: 14px;
    text-align: center;
`;

const StockBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
`;

export class PlayerStock extends PureComponent {
    constructor(props) {
        super(props);
        this.buyStock = this.buyStock.bind(this);
        this.sellStock = this.sellStock.bind(this);
    }

    buyStock() {
        this.props.onTradeStock(this.props.data.get('stockID'), 1);
    }

    sellStock() {
        this.props.onTradeStock(this.props.data.get('stockID'), -1);
    }

    render() {
        const { data } = this.props;
        return (
            <StockContainer style={{ borderColor: data.get('color') }}>
                <StockBackground style={{ backgroundColor: data.get('color'), opacity: data.get('count') / 10 }}/>
                <StockCount>{data.get('count') * 10}%</StockCount>
                <StockValue>{data.get('value')} kr</StockValue>
                <div>
                    <button onClick={this.buyStock}>Buy</button>
                    <button onClick={this.sellStock}>Sell</button>
                </div>
            </StockContainer>
        );
    }
}