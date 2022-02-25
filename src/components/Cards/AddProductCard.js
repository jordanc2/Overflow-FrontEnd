import React, { useState } from "react";
import { connect } from 'react-redux';
import { addProduct } from '../../actions/index';
import '../../styles/dashboard.css';


const AddProductCard = props => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        let newProduct = {
            name: name,
            quantity: quantity,
            price: price
        }
        props.addProduct(newProduct)
    };


    const nameChangeHandler = e => {
        e.preventDefault();
        setName(e.target.value)
    };

    const quantityChangeHandler = e => {
        e.preventDefault();
        setQuantity(e.target.value)
    };
    const priceChangeHandler = e => {
        e.preventDefault();
        setPrice(e.target.value);
    };

    return (
        <form  className="addsCase" onSubmit ={submitHandler}>
            <p>Add Product to Inventory</p>  
            <input onChange ={nameChangeHandler} type="text" value={name} placeholder="Add Product Name"/>
            <input onChange ={quantityChangeHandler}  type="text" value={quantity} placeholder="quantity"/>
            <input onChange ={priceChangeHandler} type="text" value={price} placeholder="price"/>
            <button type="submit">Submit</button>
        
        </form>
    );
};

export default connect(null, { addProduct })(AddProductCard); 