import React from 'react';
import styled from 'styled-components';

export const BoardRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    width: 100%;
    max-width: 100vw;
`;

export const BoardCell = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    width: 100%;
    margin-right: 8px;
    border: solid #888 1px;
    box-shadow: 0 0 0 2px white, 1px 1px 3px 0px black;
    border-top-width: 12px;
    border-color: ${props => props.color || '#888'};
    background-color: ${props => props.color || '#fff'};
    border-radius: 2px;
    font-size: 10px;
    
    &:first-of-type {
        padding: 10px;
        flex-basis: 100px;
        flex-shrink: 0;
    }
    
    input {
        width: 50%;
    }
`;

export const StockBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: ${props => props.numStocks / 20};
    background-color: ${props => props.color}
`;

export const StockInformation = styled.div`
    position: relative;
    z-index: 10;
    padding: 5px;
`;
