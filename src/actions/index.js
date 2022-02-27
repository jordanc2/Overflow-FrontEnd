import axios from "axios";
//not working but don't need
export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';



export const fetchAllProducts = () => dispatch => {

    dispatch({ type: FETCH_LOADING })

    axios
        .get('https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data})) 
        .catch(err => dispatch({ type: FETCH_FAIL, payload: err.response}))
};


export const fetchProduct = (productId) => dispatch => {
    dispatch({ type: FETCH_LOADING })
    axios
        .get(`hhttps://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products/${productId}`)
        .then(res => 
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
            ) 
        .catch(err => 
            dispatch({ type: FETCH_FAIL, payload: err.response})
            )
};

export const addProduct = newProduct => dispatch =>{
    axios
        .post("https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products", newProduct)
        .then(response => {console.log('added')})
        .catch(err => console.log(err));
};

export const editProduct = productId => dispatch => {
    axios
        .put(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products/pVhlr${productId}`)
        .then(response => {console.log('product edited')})
        .catch(err => console.log(err));
    };

export const deleteProduct = productId => dispatch => {
    axios
        .delete(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products/QWiQU${productId}`)
        .then(response => {console.log('product deleted')})
        .catch(err => console.log(err));
    };


//Clients

//Update client ID
export const fetchClient = () => dispatch => {
    dispatch({ type: FETCH_LOADING })
    axios
        .get("https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/clients/WSVVy")
        .then(res => 
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
            ) 
        .catch(err => 
            dispatch({ type: FETCH_FAIL, payload: err.response})
            )
};

export const addClient = newClient => dispatch =>{
    axios
        .post("https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/clients", newClient)
        .then(response => {console.log('client added')})
        .catch(err => console.log(err));
};


export const editClient = clientId => dispatch => {
    axios
        .put(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/clients/${clientId}`)
        .then(response => {console.log('client edited')})
        .catch(err => console.log(err));
    };


export const fetchAllClientInventory = (clientId) => dispatch => {
    dispatch({ type: FETCH_LOADING })
    axios
        .get(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/clients/AsvAb/clients/${clientId}/inventories`)
        .then(res => 
            dispatch({ type: FETCH_SUCCESS, payload: res.data})
            ) 
        .catch(err => 
            dispatch({ type: FETCH_FAIL, payload: err.response})
            )
};

export const editClientInventory = inventoryId => dispatch => {
    axios
        .put(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/testinventories/${inventoryId}`)
        .then(response => {console.log('inventory edited')})
        .catch(err => console.log(err));
    };


