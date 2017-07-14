import { combineReducers } from 'redux';
import { stockReducer } from './stockReducer';
import { playerReducer } from './playerReducer';
import { historikkReducer} from './historikkReducer';

export default combineReducers({
    stocks: stockReducer,
    players: playerReducer,
    historikk: historikkReducer,
});