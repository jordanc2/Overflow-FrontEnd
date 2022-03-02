import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_bg6nXPGRh',
  ClientId: '5160dhslga658moikl6eusvum5'
};

export default new CognitoUserPool(poolData);