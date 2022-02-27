import React, { useEffect, useState }from 'react';
import axios from 'axios';
import InventoryCard from '../Cards/InventoryCard';
import '../../styles/dashboard.css';

const ProductsList = props => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = () => {
            axios
            .get('https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products')
            .then(response => {
                setProducts(response.data.products);
            })
            .catch(error => {
                console.log(error);
            });
        }
        getProducts();
    }, [])

    return (
         <div>
            <h1>Products</h1>
            {products.map(item =>
                <InventoryCard 
                key={item.productId} 
                name= {item.name} 
                quantity={item.quantity} 
                price= {item.price} 
                />
            )}
        </div>
    )
}


export default ProductsList;