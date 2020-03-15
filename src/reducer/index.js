import { combineReducers } from 'redux';
import caseName from './CaseName';
import agencyName from './Agencies';

const rootReducer = combineReducers({
    caseName,
    agencyName
})

export default rootReducer;