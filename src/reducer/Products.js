import { FETCH_SUCCESS } from "../actions/index";


const initialState = {
products: [],
error: null,
isFetching: false
};

function products (state = initialState, action) {
switch (action.type) {
    case FETCH_SUCCESS:
    return {
        ...state,
        products: action.payload,
        isFetching: true,
        error: null
    };
    default:
    return state;
    }
}

export default products;