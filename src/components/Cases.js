import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'


const Cases = ({name, street_address, city, state}) => {
    return (
    <div className='case-card'>
        <h5>Name: {name}</h5>
        <p>Address: {street_address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <Link to='/Agency'>
        Agencies
            </Link>
    </div>
);
}

const mapStateToProps = (state) => ({
    name: state.caseName.name,
    street_address: state.caseName.street_address,
    city: state.caseName.city,
    state: state.caseName.state
})
export default connect(mapStateToProps)(Cases);