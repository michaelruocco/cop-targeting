import * as React from 'react';
import { Auth0Client, createAuth0Client } from '@auth0/auth0-spa-js';
import { FC, useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';
import AuthContext from './auth-context';
import { getAuthConfigApiClient } from '../../adapters/api/auth-config-api-client';

class Props {
  children: React.ReactNode | React.ReactNode[];
}

const Auth0AuthProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [tokenRefreshInterval, setTokenRefreshInterval] = useState(3500000);
  const [auth0Client, setAuth0Client] = useState<Auth0Client>(null);

  const initAuth0Client = async () => {
    const configClient = getAuthConfigApiClient();
    const authConfig = await configClient.getUiAuthConfig();
    const auth0Client = await createAuth0Client({
      domain: authConfig.auth0Config.domain,
      clientId: authConfig.auth0Config.clientId
    });
    setAuth0Client(auth0Client);

    await handleRedirectCallbackIfRequired(auth0Client);
    await authenticateIfRequired(auth0Client);

    const claims = await auth0Client.getIdTokenClaims();
    console.debug(`claims ${JSON.stringify(claims)}`);
    if (claims) {
      setToken(claims['__raw']);
      setSessionId(claims.sid);
      setUserEmail(claims.email);
      setTokenRefreshInterval(
        calculateInterval(claims['exp']),
      );
    }
  }

  const handleRedirectCallbackIfRequired = async (client: Auth0Client) => {
    if (handleRedirectCallbackIsRequired()) {
      await client.handleRedirectCallback();
    }
  }

  const authenticateIfRequired = async (client: Auth0Client) => {
    const isAuthenticated = await client.isAuthenticated();
    console.log(`isAuthenticated ${isAuthenticated}`);
    if (isAuthenticated) {
      return;
    }
    await client.loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.href
      }
    });
  }

  const handleRedirectCallbackIsRequired = () => {
    const query = window.location.search;
    return query.includes("code=") && query.includes("state=");
  }

  const logout = (uri: string) => {
    console.info(`logging out using redirect uri ${uri}`);
    auth0Client.logout({
      logoutParams: {
        returnTo: uri
      }
    });
  };

  const getToken = (): string => {
    return token;
  };

  const getSessionId = (): string => {
    return sessionId;
  };

  const getUserEmail = (): string => {
    return userEmail;
  };

  const calculateInterval = (expirySeconds: number) => {
    const expiry = new Date(expirySeconds * 1000);
    const interval = expiry.getTime() - new Date().getTime() - 120000;
    console.debug(`token refresh interval calculated as ${interval}`);
    return interval;
  };

  setInterval(() => {
    auth0Client.getTokenSilently()
      .then((updated: any) => {
        console.info(`token updated ${updated}`);
      })
      .catch((error: any) => {
        console.error(`token error ${error}`);
      });
  }, tokenRefreshInterval);

  useEffect(() => { 
    initAuth0Client();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logout: logout,
        getToken: getToken,
        getSessionId: getSessionId,
        getUserEmail: getUserEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { Auth0AuthProvider };
