import { FETCH_SUCCESS } from "../actions/index";

const initialState = {
cases: [],
error: null,
isFetching: false
};

function caseName (state = initialState, action) {
switch (action.type) {
    case FETCH_SUCCESS:
    return {
        ...state,
        cases: action.payload,
        isFetching: true,
        error: null
    };
    default:
    return state;
    }
}

export default caseName;