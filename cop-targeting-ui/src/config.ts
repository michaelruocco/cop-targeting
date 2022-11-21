import { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js';

export type CopTargetingApiConfig = {
  copTargetingApiUrl: string;
  keycloak: CopTargetingApiKeycloakConfig;
};

export interface CopTargetingApiKeycloakConfig {
  clientConfig: KeycloakConfig;
  initOptions: KeycloakInitOptions;
}

const config: CopTargetingApiConfig = {
  copTargetingApiUrl: process.env.COP_TARGETING_API_URL,
  keycloak: {
    clientConfig: {
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      realm: process.env.KEYCLOAK_REALM,
      url: process.env.KEYCLOAK_AUTH_URL,
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false,
    },
  },
};

console.debug(`config ${JSON.stringify(config)}`);

export default config;
