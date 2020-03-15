const initialState = {
    data: [ 'Hospital', 'Clinic', 'Doctor']
};

const agencyNames = (state=initialState, action) => {
    switch(action.type){
        case '':
            return{}
    default:
        return state
    }
}

export default agencyNames;