import React from 'react';
import { Link } from 'react-router-dom';

const Cases = (props) => {
    return (
    <div className='case-layout'>
        <div className='case-card'>
            <p><strong>Name: </strong>{props.name} </p>
            <p><strong>Address: </strong>{props.street_address} </p>
            <p><strong>City: </strong>{props.city} </p>
            <p><strong>State: </strong>{props.state} </p>
        </div>
            <Link style={{ textDecoration: 'none' }} to='/Agency'>
                Go To Agencies
            </Link>
    </div>
)}


export default Cases;