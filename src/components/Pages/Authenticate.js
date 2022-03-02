import Pool from '../Authentication/UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';




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

export default authenticate;


