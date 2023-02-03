export const oktaConfig = {
  clientId: '0oa879r2maJCsOk6a5d7',
  issuer: 'https://dev-79908610.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpChecks: true,
};
