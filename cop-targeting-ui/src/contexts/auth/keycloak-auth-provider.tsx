import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';
import AuthContext from './auth-context';
import { getAuthConfigApiClient } from '../../adapters/api/auth-config-api-client';

class Props {
  children: React.ReactNode | React.ReactNode[];
}

const KeycloakAuthProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [tokenRefreshInterval, setTokenRefreshInterval] = useState(3500000);
  const [keycloakClient, setKeycloakClient] = useState<Keycloak>(null);

  const initKeycloakClient = async () => {
    const configClient = getAuthConfigApiClient();
    const authConfig = await configClient.getUiAuthConfig();
    const keycloakConfig = authConfig.keycloakConfig;
    const keycloakClient = new Keycloak({
      clientId: keycloakConfig.clientId,
      realm: keycloakConfig.realm,
      url: keycloakConfig.authUrl,
    });
    keycloakClient.init({
      onLoad: keycloakConfig.initOptions.onLoad,
      checkLoginIframe: keycloakConfig.initOptions.checkLoginIframe
    }).then((authenticated) => {
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
    setKeycloakClient(keycloakClient);
  };

  const logout = (uri: string) => {
    console.info(`logging out using redirect uri ${uri}`);
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
      .then((updated: any) => {
        console.info(`token updated ${updated}`);
      })
      .catch((error: any) => {
        console.error(`token error ${error}`);
      });
  }, tokenRefreshInterval);

  useEffect(() => { 
    initKeycloakClient();
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

export { KeycloakAuthProvider };
