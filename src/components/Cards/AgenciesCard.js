import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/agencies.css'


const Agency = (props) => {
    return (
    <div className="agency-layout">
        <div className="agency-card">
        <p>Agencies associated with this case:</p>
        <h4>Name: {props.name}</h4>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        </div>
        <div className="case-link">
        <Link style={{ textDecoration: 'none' }}  to='/'>
        Back To Case
            </Link>
            </div>
    </div>
    );
}

export default Agency;