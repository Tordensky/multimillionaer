import React, { Component } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
    color: pink;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
          <h1>Hello world</h1>
      </AppContainer>
    );
  }
}

export default App;
