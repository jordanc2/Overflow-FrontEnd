import React from "react";
import { Link } from 'react-router-dom'
import InventoryList from "../List/InventoryList";
import '../../styles/dashboard.css'



const DeleteProductForm = () => {

    return (
        <div className="add-case-btn">
        <InventoryList>
            <Link style={{ textDecoration: 'none' }} to='/AddProductCard'>
                <button className="case-btn-style">Delete</button>
            </Link>
            </InventoryList>
        </div>
    )
}

export default DeleteProductForm;