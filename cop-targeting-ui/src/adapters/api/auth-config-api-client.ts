import axios from 'axios';
import { shouldStubApi, getCopTargetingApiUrl } from './api-client-stub-config';

export type KeycloakOnLoad = 'login-required' | 'check-sso';

export type UiKeycloakConfigInitOptions = {
  onLoad: KeycloakOnLoad;
  checkLoginIframe: boolean;
};

export type UiKeycloakConfig = {
  authUrl: string;
  realm: string;
  clientId: string;
  initOptions: UiKeycloakConfigInitOptions;
};

export type UiAuth0Config = {
  domain: string;
  clientId: string;
};

export type UiAuthConfig = {
  auth0Config: UiAuth0Config,
  keycloakConfig: UiKeycloakConfig;
};

export interface AuthConfigApiClient {
  getUiAuthConfig(): Promise<UiAuthConfig>;
}

class StubAuthConfigApiClient implements AuthConfigApiClient {
  getUiAuthConfig = (): Promise<UiAuthConfig> => {
    const onLoad: KeycloakOnLoad = 'login-required';
    const keycloakConfig = {
      authUrl: process.env.KEYCLOAK_AUTH_URL,
      realm: process.env.KEYCLOAK_REALM,
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      initOptions: {
        onLoad: onLoad,
        checkLoginIframe: false,
      }
    };
    const auth0Config = {
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID
    }
    const authConfig = {
      auth0Config: auth0Config,
      keycloakConfig: keycloakConfig
    }
    console.info(`returning ui auth config ${JSON.stringify(authConfig)}`);
    return Promise.resolve(authConfig);
  };
}

class RestAuthConfigApiClient implements AuthConfigApiClient {
  getUiAuthConfig = async (): Promise<UiAuthConfig> => {
    const request = {
      headers: {
        Accept: 'application/json',
      },
    };
    const { data } = await axios.get<UiAuthConfig>(`${getCopTargetingApiUrl()}/v1/ui-auth-config`, request);
    console.info(`returning ui keycloak config ${JSON.stringify(data)}`);
    return data;
  };
}

export const getAuthConfigApiClient = (): AuthConfigApiClient => {
  if (shouldStubApi()) {
    return new StubAuthConfigApiClient();
  }
  return new RestAuthConfigApiClient();
};