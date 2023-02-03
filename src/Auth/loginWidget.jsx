/* eslint-disable import/extensions */
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import SpinnerLoading from '../utils/SpinnerLoading';
import OktaSignInWidget from './OktaSignInWidget';

const LoginWidget = ({ config }) => {
  const { OktaAuth, authState } = useOktaAuth();
  const onSuccess = (token) => {
    OktaAuth.handleLoginRedirect(tokens);
  };
  const onError = (error) => {
    console.log('Sign in Error: ', error);
  };

  if (!authState) {
    return <SpinnerLoading />;
  }

  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};
