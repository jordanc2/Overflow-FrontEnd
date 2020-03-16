import { combineReducers } from 'redux';
import caseName from './CaseName';
import agencyName from './Agencies';
import user from './User';

const rootReducer = combineReducers({
    caseName,
    agencyName,
    user
})

export default rootReducer;