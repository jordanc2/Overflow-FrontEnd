import { FETCH_SUCCESS } from "../actions/index";

const initialState = {
    client: [],
    error: null,
    isFetching: false
}



const client = (state=initialState, action) => {
    switch(action.type){
        case FETCH_SUCCESS:
            return{
                ...state,
                client: action.payload,
                isFetching: true,
                error: null
    };
    default:
    return state;
    }
}

export default client;

