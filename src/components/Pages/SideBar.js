import React from 'react'
import { Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const SidebarVisible = () => (
  <Sidebar.Pushable as={Segment} style={{transform: 'none', marginTop: '3.4em', width:'13vw'}}>
    <Sidebar
      as={Menu} animation='overlay' icon='labeled' inverted vertical visible color='blue'
      style={{display: 'flex', alignItems:'center', width: '13vw', paddingLeft: '1em'}}
    >
      <Link to='/'>
      <Menu.Item as='a'
      >
        <Icon name='home' />
        Home
      </Menu.Item>
      </Link>

      <Link to='/ClientInventory'>
      <Menu.Item as='a'>
        <Icon name='user' />
        My Inventory
      </Menu.Item>
      </Link>


      <Link to='/ProductsList'>
      <Menu.Item as='a'>
        <Icon name='clipboard list' />
        Products
      </Menu.Item>
      </Link>

      <Link to='/Settings'>
      <Menu.Item as='a'>
        <Icon name='settings' />
        Settings
      </Menu.Item>
      </Link>
    </Sidebar>

    <Sidebar.Pusher style={{transform: 'none'}} >
      <Segment basic>
        <Header as='h3'>My Dashboard</Header>
        {/* <Image src='/images/wireframe/paragraph.png' /> */}
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SidebarVisible;