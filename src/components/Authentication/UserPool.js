import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_EaMR2fJ86',
  ClientId: '3ttkuu75h30738erlr4ddb3cne'
};

export default new CognitoUserPool(poolData);