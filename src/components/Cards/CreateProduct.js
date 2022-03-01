import React, { useState } from 'react';
import { Button, Container, Form, Grid } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import Sidebar from '../Pages/SideBar';
import FixedPrivateMenu from '../Pages/FixedPrivateMenu';



const CreateProduct = (props) => {
    let history = useHistory();
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');


    const postData = () => {
        axios.post(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products`, {
            name,
            quantity,
            price
        }).then(() => {
            history.push('/ProductsList')
        })
    }

    

    return (
        <div>
            <FixedPrivateMenu/>
         
                <Grid>
                <Grid.Row>
                    <Grid.Column style={{ width: '18vw',height: '100vh', display: 'flex', justifyContent: 'start', margin:'0', padding: '0'}} >
            <Sidebar/>
            </Grid.Column>
            <Grid.Column width={5}>
                <h2 style={{ marginTop:'3em', padding: '0'}}>Create New Product</h2>
            <Form className="create-form">
                <Form.Field >
                    <label>Product Name</label>
                    <input placeholder='Product Name' onChange={(e) => setName(e.target.value)} style={{boxShadow: '5px 5px 5px grey'}}/>
                </Form.Field>
                <Form.Field>
                    <label>Quantity</label>
                    <input placeholder='Quantity' onChange={(e) => setQuantity(e.target.value)} style={{boxShadow: '5px 5px 5px grey'}}/>
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    <input placeholder='Price' onChange={(e) => setPrice(e.target.value)} style={{boxShadow: '5px 5px 5px grey'}}/>
                </Form.Field>
                <Button onClick={postData} type='submit' style={{boxShadow: '5px 5px 5px grey'}}>Submit</Button >
            </Form>
            </Grid.Column>
            </Grid.Row>
            </Grid>
     
        </div>
    )
}

export default CreateProduct;
