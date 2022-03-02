import React from 'react'
import {
  Container,
  Menu,
  Header

} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const FixedMenuLayout = () => (
  <div>
    <Header
    style={{
      fontWeight: 'normal',
      width: '100vw'
    }}
    />
    <Menu color = 'blue' fixed='top' inverted style={{
      fontWeight: 'normal',
      fontSize: '1.3rem',
      padding: '0',
      height:'6vh'
    }}>
      <Container>
        <Link to='/'>
        <Menu.Item as='a' header
        
        color = 'blue' fixed='top' inverted style={{
          fontWeight: 'normal',
          fontSize: '2rem',
          marginTop: 15,
          padding: '0',
              marginLeft:'1em'
        }}
        >
          OVERFLOW
        </Menu.Item>
        </Link>
     
      </Container>
    </Menu>
  </div>
)

export default FixedMenuLayout
