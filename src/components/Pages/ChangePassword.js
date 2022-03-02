import React, { useState } from "react";
import {  Form, Button } from 'semantic-ui-react'
import AWS from 'aws-sdk';
import Pool from '../Authentication/UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';


const cognito = new AWS.CognitoIdentityServiceProvider({ region: 'us-east-2' })

export default () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");


const getSession = async () =>
await new Promise((resolve, reject) => {
  const user = Pool.getCurrentUser()
  if (user) {
    user.getSession(async (err, session) => {
      if (err) {
        reject()
      } else {
        const attributes = await new Promise((resolve, reject) => {
          user.getUserAttributes((err, attributes) => {
            if (err) {
              reject(err)
            } else {
              console.log('attributes:', attributes)
              const results = {}

              for (let attribute of attributes) {
                const { Name, Value } = attribute
                results[Name] = Value
              }

              resolve(results)
            }
          })
        })

        const accessToken = session.accessToken.jwtToken

        const mfaEnabled = await new Promise((resolve) => {
          cognito.getUser(
            {
              AccessToken: accessToken,
            },
            (err, data) => {
              if (err) resolve(false)
              else
                resolve(
                  data.UserMFASettingList &&
                    data.UserMFASettingList.includes('SOFTWARE_TOKEN_MFA')
                )
            }
          )
        })

        const token = session.getIdToken().getJwtToken()

        resolve({
          user,
          accessToken,
          mfaEnabled,
          headers: {
            'x-api-key': attributes['custom:apikey'],
            Authorization: token,
          },
          ...session,
          ...attributes,
        })
      }
    })
  } else {
    reject()
  }
})

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

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        user.changePassword(password, newPassword, (err, result) => {
          if (err) console.error(err);
          console.log(result);
        });
      });
    });
  };

  return (
    <div>
      <Form onSubmit={onSubmit} style={{ marginTop:'3em', padding: '0'}}>
        <Form.Field>
          
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={{boxShadow: '5px 5px 5px grey'}}
          placeholder='New Password'
        />
        </Form.Field>
 <Form.Field>
        <input
          value={newPassword}
          onChange={event => setNewPassword(event.target.value)}
          style={{boxShadow: '5px 5px 5px grey'}}
          placeholder='Confirm New Password'
        />
        </Form.Field>

        <Button type="submit"  style={{boxShadow: '5px 5px 5px grey'}}>Change password</Button>
      </Form>
    </div>
  );
};