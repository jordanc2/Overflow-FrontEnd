import { FETCH_SUCCESS } from "../actions/index";

const initialState = {
    inventories: [],
    error: null,
    isFetching: false
}

function inventory (state = initialState, action) {
switch (action.type) {
    case FETCH_SUCCESS:
    return {
        ...state,
        inventories: action.payload,
        isFetching: true,
        error: null
    };
    default:
    return state;
    }
}

export default inventory;