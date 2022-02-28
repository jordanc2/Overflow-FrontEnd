import React, { useEffect, useState }from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const ProductsList = () => {
    const [APIData, setAPIData] = useState([]);
 
    useEffect(() => {
            axios
            .get('https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products')
            .then(response => {
                setAPIData(response.data.products);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

        const setData = (data) => {
            let { productId, name, quantity, price } = data;
            localStorage.setItem('id', productId);
            localStorage.setItem('name', name);
            localStorage.setItem('quantity', quantity);
            localStorage.setItem('price', price);
        }


        const getData = () => {
            axios.get(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products`)
                .then((getData) => {
                    setAPIData(getData.data.products);
                })
        }

        const onDelete = (id) => {
            axios.delete(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products/${id}`)
            .then(() => {
                getData();
            })
        }
        
        return (
        
            <div>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Product Name</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
    
                    <Table.Body>
                        {APIData.map((data) => {
                            return (
                                <Table.Row key={data.productId}>
                                    <Table.Cell>{data.name}</Table.Cell>
                                    <Table.Cell>{data.quantity}</Table.Cell>
                                    <Table.Cell>${data.price}</Table.Cell>
                                    <Link to='/UpdateProduct'>
                                        <Table.Cell> 
                                            <Button onClick={() => setData(data)}>Update</Button>
                                        </Table.Cell>
                                    </Link>
                                    <Table.Cell>
                                        <Button onClick={() => onDelete(data.productId)}>Delete</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
            
        )
}


export default ProductsList;