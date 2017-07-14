import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Board } from './components/index';
import { changeMainStockValues, stockTransaction } from './actions/index';


const AppContainer = styled.div`
`;

class App extends Component {
    render() {
        const { stocks, players, onChangeStockPrice, onStockTransaction } = this.props;

        return (
            <AppContainer>
                <Board
                    stocks={stocks}
                    players={players}
                    onChangeStockPrice={onChangeStockPrice}
                    onStockTransaction={onStockTransaction}
                />
            </AppContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        stocks: state.stocks,
        players: state.players.map(p => p.viewModel(state.stocks)),
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
