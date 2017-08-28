import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Board } from './components/index';
import { changeMainStockValues, editPlayerName, stockTransaction } from './actions/index';


const AppContainer = styled.div`
`;

function Historikk({ historikk }) {
    const h = historikk.map((h, idx) => <div key={idx}>{`${h.toId} kjøper ${h.count} aksje av type ${h.stockID} fra ${h.fromId}`}</div>);
    return (
        <div>{h}</div>
    );
}

class App extends Component {
    render() {
        const { stocks, players, historikk, onChangeStockPrice, onStockTransaction, onEditPlayerName } = this.props;

        return (
            <AppContainer>
                <Board
                    stocks={stocks}
                    players={players}
                    onChangeStockPrice={onChangeStockPrice}
                    onStockTransaction={onStockTransaction}
                    onEditPlayerName={onEditPlayerName}
                />
                <Historikk historikk={historikk} />
            </AppContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        stocks: state.stocks,
        players: state.players.map(p => p.viewModel(state.stocks)),
        historikk: state.historikk,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeStockPrice(...stocks) {
            dispatch(changeMainStockValues(...stocks));
        },
        onStockTransaction(...transactions) {
            dispatch(stockTransaction(...transactions));
        },
        onEditPlayerName(playerID, name) {
            dispatch(editPlayerName(playerID, name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
