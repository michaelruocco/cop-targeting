import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './app-router';
import './styles/global.scss';
import { AuthProvider } from './contexts/auth/auth-provider';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <AuthProvider>
    <AppRouter />
  </AuthProvider>,
);
