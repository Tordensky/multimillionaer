import { createStore } from 'redux';

const defState = 0;
export default createStore(
    (state = defState, action) => {
        switch (action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        default:
            return state;
        }
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);