import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StockContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 2px;
    padding: 5px;
    border: solid black 1px;
`;

const StockCount = styled.div`
    font-size: 20px;
    text-align: center;
`;

const StockValue = styled.div`
    font-size: 14px;
    text-align: center;
`;

const StockBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
`;



export class Stock extends PureComponent {
    render() {
        const { data } = this.props;
        return (
            <StockContainer >
                <StockBackground style={{ backgroundColor: data.get('color') }}/>
                <StockCount>{data.get('count') * 10}%</StockCount>
                <StockValue>{data.get('value')} kr</StockValue>
            </StockContainer>
        );
    }
}