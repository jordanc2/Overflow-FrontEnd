import React from 'react';
import { connect } from 'react-redux'
import Case from '../Cards/CasesCard'

const CasesList = (props) => {
    return(
        <div>
            {props.cases.map((item, index) =>
                <Case key={index} name={item.name} street_address={item.street_address} city={item.city} state={item.state}/>
            )}
        </div>
    )
};

const mapStateToProps = state => ({
    cases: state.caseName,
})

export default connect(mapStateToProps)(CasesList);