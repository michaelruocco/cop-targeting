import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './app-router';
import './styles/global.scss';
import { AuthProviderAdapter } from './contexts/auth/auth-provider-adapter';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <AuthProviderAdapter>
    <AppRouter />
  </AuthProviderAdapter>,
);
