import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Board } from './components/index';


const AppContainer = styled.div`
`;

class App extends Component {
    render() {
        const { stocks, players } = this.props;

        return (
            <AppContainer>
                <Board stocks={stocks} players={players} />
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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
