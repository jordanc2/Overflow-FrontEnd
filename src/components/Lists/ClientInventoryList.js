import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider } from 'semantic-ui-react'
import FixedPrivateMenu from '../Pages/FixedPrivateMenu';
import SidebarVisible from '../Pages/SideBar';




export default InventoryListClient => ({id}) => {

    const [APIData, setAPIData] = useState([]);
 
    useEffect((id) => {
            axios
            .get(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/clients/${id}/inventories`)
            .then(response => {
                setAPIData(response.data.products);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    // const getData = () => {
    //     axios.get(`https://3m9n4hsuhb.execute-api.us-east-2.amazonaws.com/test/products`)
    //         .then((getData) => {
    //             setAPIData(getData.data.products);
    //         })
    // }

    return (
      <>
      <FixedPrivateMenu></FixedPrivateMenu>
      <SidebarVisible/>
        <Divider />
        <Card.Group itemsPerRow={4} stackable>
          {APIData.map((data) => {
              return (
                  <Card>
                <Card.Content>
                   <Card.name>Product: {data.name}</Card.name>
                  <Card.Meta>Quantity: {data.quantity}</Card.Meta>
                  <Card.Description>Price: ${data.price}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                  <Button>Remove</Button>
                </Card.Content>
                 </Card>
              )
          })}
        </Card.Group>
      </>
    )
}

