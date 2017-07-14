import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Board } from './components/index';
import { changeMainStockValues, stockTransaction } from './actions/index';


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
        const { stocks, players, historikk, onChangeStockPrice, onStockTransaction } = this.props;

        return (
            <AppContainer>
                <Board
                    stocks={stocks}
                    players={players}
                    onChangeStockPrice={onChangeStockPrice}
                    onStockTransaction={onStockTransaction}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
