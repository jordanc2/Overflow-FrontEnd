import React from 'react';
import {Link} from 'react-router-dom';


const Agency = ({name, street_address, city, state}) => {
    return (
    <div>
        <h2>Name: UNMC {name}</h2>
        <p> Address: 123 test{street_address}</p>
        <p> City: Omaha{city}</p>
        <p> State: NE {state}</p>
        <Link to='/'>
        Cases
            </Link>
    </div>
    );
}

export default Agency;