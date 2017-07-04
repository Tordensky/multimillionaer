import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Test = styled.div`
    color: pink;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Test>Hello world</Test>
      </div>
    );
  }
}

export default App;
