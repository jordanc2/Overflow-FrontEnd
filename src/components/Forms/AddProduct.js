import React from "react";
import { Link } from 'react-router-dom'
import '../../styles/dashboard.css'



const AddProductForm = () => {

    return (
        <div className="add-case-btn">
            <Link style={{ textDecoration: 'none' }} to='/AddProductCard'>
                <button className="case-btn-style">Add New Product</button>
            </Link>
        </div>
    )
}

export default AddProductForm;