import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';


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
            <Form className="create-form">
                <Form.Field>
                    <label>Product Name</label>
                    <input placeholder='Product Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Quantity</label>
                    <input placeholder='Quantity' onChange={(e) => setQuantity(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    <input placeholder='Price' onChange={(e) => setPrice(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default CreateProduct;
