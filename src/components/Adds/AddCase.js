import React from "react";
import { Link } from 'react-router-dom'
import '../../styles/dashboard.css'



const CaseForm = () => {

    return (
        <div className="add-case-btn">
            <Link style={{ textDecoration: 'none' }} to='/AddCaseCard'>
                <button className="case-btn-style">Add New Case</button>
            </Link>
        </div>
    )
}

export default CaseForm;