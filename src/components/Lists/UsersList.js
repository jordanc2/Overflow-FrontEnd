import React from 'react';
import { connect } from 'react-redux'
import Users from '../Cards/UsersCard'
import '../../styles/dashboard.css';


const UsersList = (props) => {
    return(
        <div>
            {props.username.map((item, index) =>
                <Users key={index} username={item.username}/>
            )}
        </div>
    )
};



const mapStateToProps = (state) => ({
    username: state.user
})

export default connect(mapStateToProps)(UsersList);