import React from 'react';
import styled from 'styled-components';

export const BoardRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BoardCell = styled.div`
    position: relative;
    width: 100%;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 5px;
    border: solid black 1px;
    background-color: ${props => props.color};
    
    input {
        width: 100%;
    }
`;
