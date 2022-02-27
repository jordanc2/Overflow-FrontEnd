import React, { useEffect, useState }from 'react';
import axios from 'axios';
import InventoryCard from '../Cards/InventoryCard'
import '../../styles/dashboard.css';
import Client from './Client';

const InventoryListClient = props => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        const getInventory = () => {
            axios
            .get(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/inventories/EpCld`)
            .then(response => {
                setProducts(response.data.products);
            })
            .catch(error => {
                console.log(error);
            });
        }
        getInventory();
    }, [])

    return (
         <div>
             <Client/>
            <h1>Inventory</h1>
            {products.map(item =>
                <InventoryCard 
                key={item.clientId} 
                name= {item.name} 
                quantity={item.quantity} 
                price= {item.price} 
                />
            )}
        </div>
    )
}


export default InventoryListClient;