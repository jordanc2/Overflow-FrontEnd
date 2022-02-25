import React from 'react';
import { connect } from 'react-redux';
import ClientCard from '../Cards/ClientCard';
import '../../styles/dashboard.css';


const IndividualClient = (props) => {
    return(
        <div>
                <ClientCard 
                name={props.name}
                email={props.email}
                phoneNumber={props.phoneNumber}
                />
        
        </div>
    )
};



const mapStateToProps = (state) => ({
    client: state
})



export default connect(mapStateToProps)(IndividualClient);