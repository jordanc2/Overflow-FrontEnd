import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/pic.png'
import '../../styles/dashboard.css'



const Users = (props) => {
    return (
    <div className="user-card">
        <p>Welcome {props.username},</p>
        <img src={logo} alt="Logo" />
        <div className="user-text">
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
        <p>Dashboard</p>
            </Link>
        <p>Site Details</p>
        <p>Support Tools</p>
        <p>Help</p>
        <p>FAQ</p>
        </div>
    </div>
);
}

export default Users;