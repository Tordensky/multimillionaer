import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Stock } from './Stock';

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

const StockContainer = styled.div`
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

function Player({ data }) {
    const stocks = data.get('stocks').map(stockData => <Stock key={stockData.get('stockID')} data={stockData} />);

    return (
        <PlayerContainer>
            <PlayerInfo>
                {data.get('playerID')}
            </PlayerInfo>
            {stocks}
        </PlayerContainer>
    );
}

function Stocks({ data }) {
    return (
        <StockContainer>
            <StockInfo>Aksjer</StockInfo>
            {data.map(stock =>
                <MainStockContainer key={stock.get('id')}>
                    <div>>{stock.name}</div>
                    <div>{stock.getValue()}</div>
                    <div>{stock.available}</div>
                </MainStockContainer>)}
        </StockContainer>
    );
}

export class Board extends PureComponent {
    constructor(props) {
        super(props);
        this.renderPlayers = this.renderPlayers.bind(this);
        this.renderStocks = this.renderStocks.bind(this);
    }

    renderPlayers() {
        return this.props.players.map(playerData => <Player key={playerData.playerID} data={playerData}/>);
    }

    renderStocks() {
        return (<Stocks data={this.props.stocks} />);
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