const initialState = {
    name: 'Jenna Moroney',
    street_address: '123 Street',
    city: 'Omaha',
    state: 'NE'
}

const caseName = (state=initialState, action) => {
    switch(action.type){
        case '':
            return{}
    default:
        return state
    }
}

export default caseName;