import React from 'react';




const Users = (props) => {
    return (
    <div className='user-card'>
        <p>Welcome {props.username},</p>
    </div>
);
}

export default Users;