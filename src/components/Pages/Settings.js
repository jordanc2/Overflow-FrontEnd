import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import Pool from '../Authentication/UserPool';
import { Grid } from 'semantic-ui-react'
import FixedMenuLayout from './FixedMenu'
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";
import SidebarVisible  from '../Pages/SideBar';

const cognito = new AWS.CognitoIdentityServiceProvider({ region: 'us-east-2' })

export default () => {
  const [loggedIn, setLoggedIn] = useState(false);

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


  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  return (
    <>
  <FixedMenuLayout/>
  <Grid>
      <Grid.Row>
      <Grid.Column style={{ width: '18vw',height: '100vh', display: 'flex', justifyContent: 'start', margin:'0', padding: '0'}}>
            <SidebarVisible/>
      </Grid.Column>
      {loggedIn && (
        <>
    <Grid.Column width={5}>
    
      <h2 style={{ marginTop:'3em', padding: '0'}}>Settings update</h2>
  
   
          <ChangePassword />
          <ChangeEmail />
          </Grid.Column>
  
        </>
      )}
     </Grid.Row>
  </Grid>
      
    </>
    
  );
};