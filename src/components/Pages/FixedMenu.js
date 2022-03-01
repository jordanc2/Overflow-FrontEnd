import React from 'react'
import {
  Container,
  Menu

} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const FixedMenuLayout = () => (
  <div>
    <Menu color = 'blue' fixed='top' inverted>
      <Container>
        <Link to='/'>
        <Menu.Item as='a' header>
          OVERFLOW
        </Menu.Item>
        </Link>
        <Link to='/'>
        <Menu.Item >Homepage</Menu.Item>
        </Link>
        <Link to='/AboutUs'>
        <Menu.Item >About Us</Menu.Item>
        </Link>
      </Container>
    </Menu>
  </div>
)

export default FixedMenuLayout