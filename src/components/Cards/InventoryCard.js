import React, {useState} from "react";
import { Link } from 'react-router-dom';
import '../../styles/dashboard.css';
import axios from 'axios';





const InventoryCard = (props) => {
    const [list, updateList] = useState();

    const deleteProduct = productId  => {
        axios
            .delete(`https://cors-anywhere.herokuapp.com/:https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products/${productId}`)
            .then(response => {
                updateList(list.filter(item => item.productId !== productId));
                console.log(response, 'product deleted')})
            .catch(err => console.log(err));
        };
    
    return (
    <div className='case-layout'>
        <div className='case-card'>
            <h4>Product Name:{props.name} </h4>
            <br/>
            <p><strong>Quantity: </strong>{props.quantity} </p>
            <br/>
            <p><strong>Price: </strong>{props.price} </p>
            <br/>
        </div>
        <div className="agency-link">
            <Link style={{ textDecoration: 'none' }} to='/ProductsList'>
                <button onClick={deleteProduct} className="case-btn-style"> Delete </button>
            </Link>
              <br/>
               <Link style={{ textDecoration: 'none' }} to='/ProductsList'>
                 <button className="case-btn-style"> Edit</button>
                 </Link>
            </div>
    </div>
)}


export default InventoryCard;