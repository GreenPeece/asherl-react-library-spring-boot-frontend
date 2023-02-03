import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

import OktaSignIn from '@okta/okta-signin-widget';
import { useEffect, useRef } from 'react';

import { oktaConfig } from '@/lib/oktaConfig';

const OktaSignInWidget = ({ onSuccess, onError }) => {
  const widgetRef = useRef();

  useEffect(() => {
    if (!widgetRef.current) {
      return;
    }

    const widget = new OktaSignIn(oktaConfig);
    widget
      .showSignInToGetTokens({
        el: widgetRef.current,
      })
      .then(onSuccess)
      .catch(onError);

    widget.remove();
  }, [onSuccess, onError]);

  return (
    <div>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default OktaSignInWidget;
