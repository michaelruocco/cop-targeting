import * as React from 'react';

export type PnrAccessRequest = {
  sessionId: string;
  isRequested: boolean;
};

export type PnrContext = {
  isPnrAccessRequested: (sessionId: string) => boolean;
  updatePnrAccessRequest: (request: PnrAccessRequest) => void;
};

export default React.createContext<PnrContext>(null);
