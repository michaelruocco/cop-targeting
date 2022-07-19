import * as React from 'react';
import { FC, useContext } from 'react';
import Layout from '../../components/layout/layout';
import AirPaxTaskList from '../../components/task/air-pax-task-list';
import TriggerRequestPnrAccess from '../../components/task/trigger-request-pnr-access';
import AuthContext from '../../contexts/auth/auth-context';
import PnrAccessContext from '../../contexts/pnr/pnr-access-context';

const AirPaxTaskListPage: FC = () => {
  const { getSessionId } = useContext(AuthContext);
  const { isPnrAccessRequested } = useContext(PnrAccessContext);

  const getComponentToShow = () => {
    if (isPnrAccessRequested(getSessionId())) {
      return <AirPaxTaskList />;
    }
    return <TriggerRequestPnrAccess />;
  };

  return <Layout>{getComponentToShow()}</Layout>;
};

export default AirPaxTaskListPage;
