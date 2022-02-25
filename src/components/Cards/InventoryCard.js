import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/dashboard.css'


const InventoryCard = (props) => {
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
                <button className="case-btn-style"> Delete </button>
            </Link>
              <br/>
               <Link style={{ textDecoration: 'none' }} to='/ProductsList'>
                 <button className="case-btn-style"> Edit</button>
                 </Link>
            </div>
    </div>
)}


export default InventoryCard;