import * as React from 'react';
import { FC, useState } from 'react';
import PnrAccessContext, { PnrAccessRequest } from './pnr-access-context';

const ITEM_KEY = 'session-pnr-access-request';

class Props {
  children: React.ReactNode | React.ReactNode[];
}

const PnrAccessProvider: FC<Props> = ({ children }) => {
  const loadPnrAccessRequestFromStorage = (): PnrAccessRequest => {
    const item = localStorage.getItem(ITEM_KEY);
    if (item == null) {
      return { sessionId: 'unknown', isRequested: false };
    }
    return JSON.parse(item) as PnrAccessRequest;
  };

  const updatePnrAccessRequest = (request: PnrAccessRequest) => {
    setPnrAccessRequest(request);
    localStorage.setItem(ITEM_KEY, JSON.stringify(request));
  };

  const isPnrAccessRequested = (sessionId: string) => {
    return (
      pnrAccessRequest.sessionId === sessionId && pnrAccessRequest.isRequested
    );
  };

  const storageRequest = loadPnrAccessRequestFromStorage();
  const [pnrAccessRequest, setPnrAccessRequest] = useState(storageRequest);
  return (
    <PnrAccessContext.Provider
      value={{
        updatePnrAccessRequest: updatePnrAccessRequest,
        isPnrAccessRequested: isPnrAccessRequested,
      }}
    >
      {children}
    </PnrAccessContext.Provider>
  );
};

export { PnrAccessProvider };
