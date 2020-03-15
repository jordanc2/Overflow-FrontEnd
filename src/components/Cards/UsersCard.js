import React from 'react';
import { connect } from 'react-redux'



const Users = ({username}) => {
    return (
    <div>
        <h4>{username}</h4>
    </div>
);
}

const mapStateToProps = (state) => ({
    username: state.user.username
})

export default connect(mapStateToProps)(Users);