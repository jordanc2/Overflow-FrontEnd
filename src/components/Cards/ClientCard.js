import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/pic.png';
import '../../styles/dashboard.css';


const ClientCard = (props) => {
    return (
    <div className="user-card">
        <p>Welcome{props.name},</p>
        <img src={logo} alt="Logo" />
        <div className="user-text">
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/ProductsList'>
        <p>Products</p>
            </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/InventoryList'>
        <p>Inventory</p>
         </Link>
         <Link style={{ textDecoration: 'none', color: 'white' }} to='/CreateProduct'>
        <p>Create Product</p>
         </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/settings'>
        <p>Settings</p>
          </Link>
        </div>
    </div>
);
}

export default ClientCard;