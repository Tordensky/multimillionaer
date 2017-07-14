import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { PlayerStock } from './PlayerStock';
import { StockTransactionRecord } from '../actions/index';

const BoardContainer = styled.div`
    width: 100vw;
    border: solid grey 2px;
    padding: 5px;
`;

const PlayerContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PlayerInfo = styled.div`
    width: 100%;
    margin: 5px;
    padding: 10px;
    border: solid black 1px;
`;

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

class Player extends PureComponent {
    constructor(props) {
        super(props);
        this.onTradeStock = this.onTradeStock.bind(this);
    }

    onTradeStock(stockID, count = 0) {
        this.props.onStockTransaction(new StockTransactionRecord({
            toId: this.props.data.get('playerID'),
            fromId: 'bank',
            stockID,
            count,
        }))
    }

    render() {
        const { data } = this.props;
        const stocks = data.get('stocks')
            .map(stockData => <PlayerStock key={stockData.get('stockID')} data={stockData} onTradeStock={this.onTradeStock} />);

        return (
            <PlayerContainer>
                <PlayerInfo>
                    {data.get('playerID')}
                </PlayerInfo>
                {stocks}
            </PlayerContainer>
        );
    }
}


class MainStocks extends PureComponent {
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
                <div>Value: {stock.getValue()}</div>
                <div>Available: {stock.available * 10}%</div>
                <div>Level: {stock.level}</div>
                <div>
                    <button onClick={this.onPriceUp}>UP</button>
                    <button onClick={this.onPriceDown}>DOWN</button>
                </div>
            </MainStockContainer>
        );
    }
}

export class Board extends PureComponent {
    constructor(props) {
        super(props);
        this.renderPlayers = this.renderPlayers.bind(this);
        this.renderStocks = this.renderStocks.bind(this);
    }

    renderPlayers() {
        return this.props.players.map(playerData => <Player key={playerData.playerID} data={playerData}
                                                            onStockTransaction={this.props.onStockTransaction} />);
    }

    renderStocks() {
        const { onChangeStockPrice } = this.props;
        return (<MainStocks data={this.props.stocks} onChangeStockPrice={onChangeStockPrice} />);
    }

    render() {
        return (
            <BoardContainer>
                {this.renderStocks()}
                {this.renderPlayers()}
            </BoardContainer>
        );
    }
}