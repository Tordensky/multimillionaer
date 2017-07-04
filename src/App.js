import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const AppContainer = styled.div`
    color: pink;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
          <h1>Hello world, {this.props.counter}</h1>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.deincrement}>-</button>
      </AppContainer>
    );
  }
}

function mapStateToProps(state) {
    return {
        counter: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment() {
            dispatch({ type: 'INC' });
        },

        deincrement() {
            dispatch({ type: 'DEC' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
