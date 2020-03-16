const initialState = [
        {
        name: 'Methodist',
        address: '456 street',
        city: 'Omaha',
        state: 'NE'
        },
        {
        name: 'UNMC',
        address: '000 street',
        city: 'Omaha',
        state: 'NE'
        }
]


const agencyNames = (state=initialState, action) => {
    switch(action.type){
        case '':
            return{}
    default:
        return state
    }
}

export default agencyNames;