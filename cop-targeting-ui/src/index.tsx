import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './app-router';
import './styles/global.scss';
import { Auth0AuthProvider } from './contexts/auth/auth0-auth-provider';
import { KeycloakAuthProvider } from './contexts/auth/keycloak-auth-provider';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Auth0AuthProvider>
    <AppRouter />
  </Auth0AuthProvider>
);

/*root.render(
  <KeycloakAuthProvider>
    <AppRouter />
  </KeycloakAuthProvider>
);*/
