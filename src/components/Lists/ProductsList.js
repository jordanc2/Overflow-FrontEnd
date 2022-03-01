import React, { useEffect, useState }from 'react';
import axios from 'axios';
import { Table, Button,Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import FixedPrivateMenu from '../Pages/FixedPrivateMenu';
import SidebarVisible  from '../Pages/SideBar';
import CreateProduct from '../Cards/CreateProduct';


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
        <>
        <FixedPrivateMenu/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column style={{ width: '18vw',height: '100vh', display: 'flex', justifyContent: 'start', margin:'0', padding: '0'}}>
            <SidebarVisible/>
            </Grid.Column>
            <Grid.Column width={8}>
                <h2 style={{ marginTop:'3em', padding: '0'}}>Product Inventory</h2>    
                <Table singleLine style={{boxShadow: '5px 5px 5px grey'}}>
                    <Table.Header fullWidth>
                    <Table.Row > 
                    <Table.HeaderCell  colSpan='5' >
                        <Link to='/CreateProduct'>
                        <Button
                         floated='right'
                         icon
                         labelPosition='left'
                         primary
                         size='small'
                         style={{boxShadow: '5px 5px 5px grey'}}
                        >
                            <Icon name='add' />
                            Product</Button>
                            </Link>
                        </Table.HeaderCell>
                         </Table.Row>

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
                                            <Button onClick={() => setData(data)} style={{boxShadow: '5px 5px 5px grey'}}>Update</Button>
                                        </Table.Cell>
                                    </Link>
                                    <Table.Cell>
                                        <Button onClick={() => onDelete(data.productId)} style={{boxShadow: '5px 5px 5px grey'}}>Delete</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
                </Grid.Column>
                </Grid.Row>
                </Grid>
           
            </>
            
        )
}


export default ProductsList;