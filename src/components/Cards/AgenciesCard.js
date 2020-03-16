import React from 'react';
import {Link} from 'react-router-dom';


const Agency = (props) => {
    return (
    <div>
        <p>Agencies associated with this case:</p>
        <h4>Name: {props.name}</h4>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <Link style={{ textDecoration: 'none' }}  to='/'>
        Back To Case
            </Link>
    </div>
    );
}

export default Agency;