import React from 'react';
import AWS from 'aws-sdk';
import Pool from '../Authentication/UserPool';

const cognito = new AWS.CognitoIdentityServiceProvider({ region: 'us-east-2' })

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

export default getSession;