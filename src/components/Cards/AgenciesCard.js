import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'


const Agency = ({agencies}) => {
    return (
    <div>
        <p>Agencies associated with this case: {agencies}</p>
        <Link to='/'>
        Back To Case
            </Link>
    </div>
    );
}

const mapStateToProps = (state) => ({
    agencies: state.agencyName.data,
})
export default connect(mapStateToProps)(Agency);