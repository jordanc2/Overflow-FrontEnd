import React, { useState, useEffect } from 'react';
import { Button, Grid, Form } from 'semantic-ui-react'
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
            <FixedPrivateMenu/>
            <Grid>
                <Grid.Row>
                    <Grid.Column style={{ width: '18vw',height: '100vh', display: 'flex', justifyContent: 'start', margin:'0', padding: '0'}}>
                <Sidebar/>
                </Grid.Column>
                <Grid.Column width={5}>
                    <h2 style={{ marginTop:'3em', padding: '0'}}>Update Product</h2>
            <Form>

                <Form.Field key={id}>
                    <label>Product Name</label>
                    <input placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} style={{boxShadow: '5px 5px 5px grey'}}/>
                </Form.Field>
                <Form.Field>
                    <label>Quantity</label>
                    <input placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{boxShadow: '5px 5px 5px grey'}}/>
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    <input placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} style={{boxShadow: '5px 5px 5px grey'}}/>
                </Form.Field>
                
                <Button type='submit' onClick={updateAPIData} style={{boxShadow: '5px 5px 5px grey'}}>Update</Button>
            </Form>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}