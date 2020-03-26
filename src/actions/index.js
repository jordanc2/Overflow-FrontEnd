import axios from "axios";

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';


export const fetchCase = () => dispatch => {
    dispatch({ type: FETCH_LOADING })
    axios
        .get('https://cases-backend.herokuapp.com/api/cases')
        .then(res => 
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
            ) 
        .catch(err => 
            dispatch({ type: FETCH_FAIL, payload: err.response})
            )
};

export const addCase = newCase => dispatch =>{
    axios
        .post("https://cases-backend.herokuapp.com/api/cases", newCase)
        .then(response => {})
        .catch(err => console.log(err));
};

export const editCase = caseId => dispatch => {
    axios
        .put(`https://cases-backend.herokuapp.com/api/cases/${caseId}`)
        .then(response => {})
        .catch(err => console.log(err));
    };

export const deleteCase = caseId => dispatch => {
    axios
        .delete(`https://cases-backend.herokuapp.com/api/cases/${caseId}`)
        .then(response => {})
        .catch(err => console.log(err));
    };





