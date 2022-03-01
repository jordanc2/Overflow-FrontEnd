import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import FixedMenuLayout from './FixedMenu';

const RegisterForm = () => (
  <>
  <FixedMenuLayout></FixedMenuLayout>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        Register your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Last Name'
            type='text'
          />
          <Form.Input
            fluid
            icon='phone'
            iconPosition='left'
            placeholder='Phone Number'
            type='text'
          />
          <Form.Input
            fluid
            icon='mail'
            iconPosition='left'
            placeholder='email'
            type='email'
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
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

export default RegisterForm;