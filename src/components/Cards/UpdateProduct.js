import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import Sidebar from '../Pages/SideBar';
import FixedPrivateMenu from '../Pages/FixedPrivateMenu';

export default function UpdateProduct() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('id'))
        setName(localStorage.getItem('name'));
        setQuantity(localStorage.getItem('quantity'));
        setPrice(localStorage.getItem('price'));
    }, []);

    const updateAPIData = (product) => {
        axios.put(`https://cors-anywhere.herokuapp.com/:https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products/${product}`, {
            name,
            quantity,
            price
        }).then(() => {
            console.log('updated')
            history.push('/ProductsList')
        })
    }

    return (
        <div>
            <FixedPrivateMenu></FixedPrivateMenu>
            <Container>
                <Sidebar/>
            <Form>
                <Form.Field key={id}>
                    <label>Product Name</label>
                    <input placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Quantity</label>
                    <input placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    <input placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                </Form.Field>
                
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
            </Container>
        </div>
    )
}