import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { MainStocks } from './MainStock';
import { Player } from './Player';

const BoardContainer = styled.div`
    max-width: 100vw;
    border: solid grey 2px;
    padding: 20px;
    margin: 0 auto;
    
    background-color: #edeae1;
`;

export class Board extends PureComponent {
    constructor(props) {
        super(props);
        this.renderPlayers = this.renderPlayers.bind(this);
        this.renderStocks = this.renderStocks.bind(this);
    }

    renderPlayers() {
        return this.props.players.map(playerData =>
            <Player
                key={playerData.playerID}
                data={playerData}
                onStockTransaction={this.props.onStockTransaction}
                onEditPlayerName={this.props.onEditPlayerName}
            />);
    }

    renderStocks() {
        const { onChangeStockPrice } = this.props;
        return (
            <MainStocks
                data={this.props.stocks}
                onChangeStockPrice={onChangeStockPrice}
            />);
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