import React, { useState } from 'react';
import UserPool from '../Authentication/UserPool';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import FixedMenuLayout from './FixedMenu';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(name, lastName, phone, email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return(
  <>
  <FixedMenuLayout></FixedMenuLayout>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        Register your account
      </Header>
      <Form size='large' onSubmit={onSubmit}>
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          iconPosition='left' 
          placeholder='First Name' 
          value={name}
          onChange={event => setName(event.target.value)}
          />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Last Name'
            type='text'
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
          <Form.Input
            fluid
            icon='phone'
            iconPosition='left'
            placeholder='Phone Number'
            type='text'
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
          <Form.Input
            fluid
            icon='mail'
            iconPosition='left'
            placeholder='email'
            type='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <Button color='blue' fluid size='large'>
            Register
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <a href='Login'> Sign In</a>
      </Message>
    </Grid.Column>
  </Grid>
  </>
  )
}

export default RegisterForm;