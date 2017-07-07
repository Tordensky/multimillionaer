import { combineReducers } from 'redux';
import { stockReducer } from './stockReducer';
import { playerReducer } from './playerReducer';

export default combineReducers({
    stocks: stockReducer,
    players: playerReducer,
});