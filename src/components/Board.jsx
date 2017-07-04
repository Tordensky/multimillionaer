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



const data = [
    {
        playerId: 'red',
        stocks: [
            {
                stockID: 'a',
                count: 1,
                color: '#1091ed'
            },
            {
                stockID: 'b',
                count: 1,
                color: '#eac3c4'
            },
            {
                stockID: 'c',
                count: 1,
                color: '#b6c203'
            },
            {
                stockID: 'd',
                count: 1,
                color: '#cbc7bd',
            },
            {
                stockID: 'e',
                count: 1,
                color: '#eee063'
            },
            {
                stockID: 'f',
                count: 1,
                color: '#f96b96',
            },
            {
                stockID: 'g',
                count: 1,
                color: '#edb96e',
            },
            {
                stockID: 'h',
                count: 1,
                color: '#f0d901'
            },
            {
                stockID: 'i',
                count: 1,
                color: '#96c1b4',
            },
            {
                stockID: 'j',
                count: 1,
                color: '#ec690c',
            },
        ]
    },
    {
        playerId: 'blue',
        stocks: [
            {
                stockID: 'a',
                count: 1,
                color: '#1091ed'
            },
            {
                stockID: 'b',
                count: 1,
                color: '#eac3c4'
            },
            {
                stockID: 'c',
                count: 1,
                color: '#b6c203'
            },
            {
                stockID: 'd',
                count: 1,
                color: '#cbc7bd',
            },
            {
                stockID: 'e',
                count: 1,
                color: '#eee063'
            },
            {
                stockID: 'f',
                count: 1,
                color: '#f96b96',
            },
            {
                stockID: 'g',
                count: 1,
                color: '#edb96e',
            },
            {
                stockID: 'h',
                count: 1,
                color: '#f0d901'
            },
            {
                stockID: 'i',
                count: 1,
                color: '#96c1b4',
            },
            {
                stockID: 'j',
                count: 1,
                color: '#ec690c',
            },
        ]
    },
    {
        playerId: 'blue',
        stocks: [
            {
                stockID: 'a',
                count: 1,
                color: '#1091ed'
            },
            {
                stockID: 'b',
                count: 1,
                color: '#eac3c4'
            },
            {
                stockID: 'c',
                count: 1,
                color: '#b6c203'
            },
            {
                stockID: 'd',
                count: 1,
                color: '#cbc7bd',
            },
            {
                stockID: 'e',
                count: 1,
                color: '#eee063'
            },
            {
                stockID: 'f',
                count: 1,
                color: '#f96b96',
            },
            {
                stockID: 'g',
                count: 1,
                color: '#edb96e',
            },
            {
                stockID: 'h',
                count: 1,
                color: '#f0d901'
            },
            {
                stockID: 'i',
                count: 1,
                color: '#96c1b4',
            },
            {
                stockID: 'j',
                count: 1,
                color: '#ec690c',
            },
        ]
    },
    {
        playerId: 'blue',
        stocks: [
            {
                stockID: 'a',
                count: 1,
                color: '#1091ed'
            },
            {
                stockID: 'b',
                count: 1,
                color: '#eac3c4'
            },
            {
                stockID: 'c',
                count: 1,
                color: '#b6c203'
            },
            {
                stockID: 'd',
                count: 1,
                color: '#cbc7bd',
            },
            {
                stockID: 'e',
                count: 1,
                color: '#eee063'
            },
            {
                stockID: 'f',
                count: 1,
                color: '#f96b96',
            },
            {
                stockID: 'g',
                count: 1,
                color: '#edb96e',
            },
            {
                stockID: 'h',
                count: 1,
                color: '#f0d901'
            },
            {
                stockID: 'i',
                count: 1,
                color: '#96c1b4',
            },
            {
                stockID: 'j',
                count: 1,
                color: '#ec690c',
            },
        ]
    },
    {
        playerId: 'blue',
        stocks: [
            {
                stockID: 'a',
                count: 1,
                color: '#1091ed'
            },
            {
                stockID: 'b',
                count: 1,
                color: '#eac3c4'
            },
            {
                stockID: 'c',
                count: 1,
                color: '#b6c203'
            },
            {
                stockID: 'd',
                count: 1,
                color: '#cbc7bd',
            },
            {
                stockID: 'e',
                count: 1,
                color: '#eee063'
            },
            {
                stockID: 'f',
                count: 1,
                color: '#f96b96',
            },
            {
                stockID: 'g',
                count: 1,
                color: '#edb96e',
            },
            {
                stockID: 'h',
                count: 1,
                color: '#f0d901'
            },
            {
                stockID: 'i',
                count: 1,
                color: '#96c1b4',
            },
            {
                stockID: 'j',
                count: 1,
                color: '#ec690c',
            },
        ]
    },
    {
        playerId: 'blue',
        stocks: [
            {
                stockID: 'a',
                count: 1,
                color: '#1091ed'
            },
            {
                stockID: 'b',
                count: 1,
                color: '#eac3c4'
            },
            {
                stockID: 'c',
                count: 1,
                color: '#b6c203'
            },
            {
                stockID: 'd',
                count: 1,
                color: '#cbc7bd',
            },
            {
                stockID: 'e',
                count: 1,
                color: '#eee063'
            },
            {
                stockID: 'f',
                count: 1,
                color: '#f96b96',
            },
            {
                stockID: 'g',
                count: 1,
                color: '#edb96e',
            },
            {
                stockID: 'h',
                count: 1,
                color: '#f0d901'
            },
            {
                stockID: 'i',
                count: 1,
                color: '#96c1b4',
            },
            {
                stockID: 'j',
                count: 1,
                color: '#ec690c',
            },
        ]
    },

];

function Player({ data }) {
    const stocks = data.stocks.map(stockData => <Stock data={stockData} />);

    return (
        <PlayerContainer>
            <PlayerInfo>
                {data.playerId}
            </PlayerInfo>
            {stocks}
        </PlayerContainer>
    );
}

export class Board extends PureComponent {
    constructor(props) {
        super(props);
        this.renderPlayers = this.renderPlayers.bind(this);
    }

    renderPlayers() {
        // todo from props
        return data.map(playerData => <Player data={playerData}/>);
    }

    render() {
        return (
            <BoardContainer>
                {this.renderPlayers()}
            </BoardContainer>
        );
    }
}