import * as React from 'react';

export type AuthContext = {
  logout: (uri: string) => void;
  getToken: () => string;
};

export default React.createContext<AuthContext>(null);
