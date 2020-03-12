import React from 'react';
import {Link} from 'react-router-dom';


const Cases = ({name, street_address, city, state}) => {
    return (
    <div  className="card">
        <h2>Case Name:Jane Does{name}</h2>
        <p> Address: 123 milky way{street_address}</p>
        <p> City: Omaha{city}</p>
        <p> State: NE{state}</p>
        <Link to='/Agency'>
        Agency
            </Link>
    </div>
);
}

export default Cases;