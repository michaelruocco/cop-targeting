import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { getAuthConfigApiClient } from '../../adapters/api/auth-config-api-client';
import { Auth0AuthProvider } from './auth0-auth-provider';
import { KeycloakAuthProvider } from './keycloak-auth-provider';

class Props {
  children: React.ReactNode | React.ReactNode[];
}

const AuthProviderAdapter: FC<Props> = ({ children }) => {
  const [configuredProvider, setConfiguredProvider] = useState(null);

  const init = async () => {
    const configClient = getAuthConfigApiClient();
    const authConfig = await configClient.getUiAuthConfig();
    if (authConfig.auth0Config.clientId) {
      setConfiguredProvider('auth0');
    } else if (authConfig.keycloakConfig.clientId) {
      setConfiguredProvider('keycloak');
    }
  };

  useEffect(() => {
    init();
  }, []);

  console.log(`configured auth provider ${configuredProvider}`);
  if (configuredProvider === 'auth0') {
    return <Auth0AuthProvider>{children}</Auth0AuthProvider>;
  } else if (configuredProvider === 'keycloak') {
    return <KeycloakAuthProvider>{children}</KeycloakAuthProvider>;
  } else {
    return <p>no authentication provider configured</p>;
  }
};

export { AuthProviderAdapter };
