import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { formaterKroner } from '../util/index';
import {BoardCell, StockBackground, StockInformation} from './Layout';



const StockCount = styled.div`
    font-size: 14px;
    text-align: center;
`;

const StockValue = styled.div`
    font-size: 10px;
    text-align: center;
    margin-bottom: 30px;
`;



const StockMenu = styled.div`
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;

    display: flex;
    padding: 2px;
`;

const StockMenuButton = styled.button`
    width: 100%;
    margin-right: 2px;
    z-index: 12; 
    
    &:last-of-type {
        margin-right: 0;
    }
`;


export class PlayerStock extends PureComponent {
    constructor(props) {
        super(props);
        this.buyStock = this.buyStock.bind(this);
        this.sellStock = this.sellStock.bind(this);
    }

    buyStock() {
        this.props.onTradeStock(this.props.data.get('stockID'), 1);
    }

    sellStock() {
        this.props.onTradeStock(this.props.data.get('stockID'), -1);
    }

    render() {
        const { data } = this.props;
        return (
            <BoardCell style={{ borderColor: data.get('color') }}>
                <StockBackground color={data.get('color')} numStocks={data.get('count')} />
                <StockInformation>
                    <StockCount>{data.get('count') * 10}%</StockCount>
                    <StockValue>{formaterKroner(data.get('value', 0))} kr</StockValue>
                </StockInformation>
                <StockMenu color={data.get('color')}>
                    <StockMenuButton onClick={this.sellStock}>Selg</StockMenuButton>
                    <StockMenuButton onClick={this.buyStock}>Kjøp</StockMenuButton>
                </StockMenu>
            </BoardCell>
        );
    }
}