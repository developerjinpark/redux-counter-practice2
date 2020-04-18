import number from './number';
import color from './color';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    numData: number,
    colorData: color
});

export default reducers;