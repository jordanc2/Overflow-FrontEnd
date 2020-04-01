import React from 'react';
import { connect } from 'react-redux'
import Agency from '../Cards/AgenciesCard'
import '../../styles/dashboard.css';

const AgencyList = (props) => {
    return(
        <div > 
            <h1>Agency Overview</h1>
            {props.agencies.map((item, index) =>
                <Agency key={index} name={item.name} address={item.address} city={item.city} state={item.state}/>
            )}
        </div>
    )
};

const mapStateToProps = state => ({
    agencies: state.agencyName
})

export default connect(mapStateToProps)(AgencyList);