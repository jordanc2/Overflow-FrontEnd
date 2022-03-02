import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pool from '../Authentication/UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import FixedMenuLayout from './FixedMenu'



const LoginForm = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool })
      const authDetails = new AuthenticationDetails({ Username, Password })

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('onSuccess:', data)
          resolve(data)
        },

        onFailure: (err) => {
          console.error('onFailure:', err)
          reject(err)
        },

        newPasswordRequired: (data) => {
          console.log('newPasswordRequired:', data)
          resolve(data)
        },

      })
    })

  const onSubmit = event => {
    event.preventDefault();

    authenticate(email, password)
      .then(data => {
        console.log('Logged in!', data);
      })
      .catch(err => {
        console.error('Failed to login!', err);
      })
  };

 return ( 
<>
<FixedMenuLayout></FixedMenuLayout>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        Log in to your account
      </Header>
      <Form size='large' onSubmit={onSubmit}>
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          iconPosition='left' 
          placeholder='E-mail address'
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
  <Link to='/ProductsList'>
          <Button color='blue' fluid size='large'>
            Login
          </Button>
          </Link>
        </Segment>
      </Form>
      <Message>
        Don't have an account yet? <a href='/Register'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  </>
)
}

export default LoginForm