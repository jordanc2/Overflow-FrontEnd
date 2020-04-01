import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import Case from '../Cards/CasesCard';
import { fetchCase } from '../../actions/index';
import AddCase from '../Adds/AddCase';
import '../../styles/dashboard.css';

const CasesList = (props) => {


    useEffect (()=>{
        props.fetchCase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (props.isFetching){
        return <h2>Loading Cases...</h2>
    }

    return(
        <div>
            <h1>Case Overview</h1>
            <AddCase/>

            {props.error && <p>{props.error}</p>}
            {props.cases.map(item =>
                <Case 
                key={item.id} 
                case_id= {item.case_id} 
                full_name={item.full_name} 
                phone= {item.phone} 
                email={item.email} 
                street_address={item.street_address} 
                zip_code ={item.zip_code} 
                city={item.city} 
                state={item.state}/>
            )}
        </div>
    )
};

const mapStateToProps = state => ({
    cases: state.caseName.cases,
})

export default connect(mapStateToProps, {fetchCase})(CasesList);