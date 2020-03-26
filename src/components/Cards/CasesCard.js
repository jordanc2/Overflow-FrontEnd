import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/dashboard.css'

const Cases = (props) => {
    return (
    <div className='case-layout'>
        <div className='case-card'>
            <p><strong>Case ID: </strong>{props.case_id} </p>
            <p><strong>Name: </strong>{props.full_name} </p>
            <p><strong>Phone: </strong>{props.phone} </p>
            <p><strong>Email: </strong>{props.email} </p>
            <p><strong>Street Address: </strong>{props.street_address} </p>
            <p><strong>Zip Code: </strong>{props.zip_code} </p>
            <p><strong>City: </strong>{props.city} </p>
            <p><strong>State: </strong>{props.state} </p>
        </div>
        <div className="agency-link">
            <Link style={{ textDecoration: 'none' }} to='/Agency'>
                Go To Agencies
            </Link>
            </div>
    </div>
)}


export default Cases;