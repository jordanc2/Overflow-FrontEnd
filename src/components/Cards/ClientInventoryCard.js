import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/agencies.css'


const ClientInventoryCard = (props) => {
    return (
    <div className="agency-layout">
        <div className="agency-card">
       {props.list.map(list => (
      <span>{product.name}</span>
    ))}
        </div>
        <div className="case-link">
        <Link style={{ textDecoration: 'none' }}  to='/InventoryList'>
        Delete
            </Link>
            </div>
    </div>
    );
}

export default ClientInventoryCard;
