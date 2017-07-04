import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Board } from './components/index';


const AppContainer = styled.div`
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
          <Board/>
      </AppContainer>
    );
  }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
