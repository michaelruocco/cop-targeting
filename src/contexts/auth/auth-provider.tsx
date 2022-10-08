import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';
import AuthContext from './auth-context';
import config from '../../config';

class Props {
  children: React.ReactNode | React.ReactNode[];
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [tokenRefreshInterval, setTokenRefreshInterval] = useState(3500000);

  const [keycloakClient, setKeycloakClient] = useState(
    new Keycloak(config.keycloak.clientConfig),
  );

  const logout = (uri: string) => {
    console.debug(`logging out using redirect uri ${uri}`);
    keycloakClient.logout({ redirectUri: uri });
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
    keycloakClient
      .updateToken(30)
      .then((updated) => {
        console.info(`token updated ${updated}`);
      })
      .catch((error) => {
        console.error(`token error ${error}`);
      });
  }, tokenRefreshInterval);

  useEffect(() => {
    keycloakClient.init(config.keycloak.initOptions).then((authenticated) => {
      console.debug(`authenticated ${authenticated}`);
      if (authenticated) {
        setKeycloakClient(keycloakClient);
        setToken(keycloakClient.token);
        setSessionId(keycloakClient.tokenParsed.sessionId);
        setUserEmail(keycloakClient.tokenParsed.email);
        setTokenRefreshInterval(
          calculateInterval(keycloakClient.tokenParsed.exp),
        );
      } else {
        console.debug(`keycloak login result ${keycloakClient.login()}`);
      }
    });
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

export { AuthProvider };
