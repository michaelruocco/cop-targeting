import * as React from 'react';
import { FC, useContext, useState, useEffect } from 'react';
import { StubTaskClient, Task } from '../../adapters/task/task-client';
import Layout from '../../components/layout/layout';
import AirPaxTaskList from '../../components/task/air-pax-task-list';
import TriggerRequestPnrAccess from '../../components/task/trigger-request-pnr-access';
import AuthContext from '../../contexts/auth/auth-context';
import PnrAccessContext from '../../contexts/pnr/pnr-access-context';

import '../../styles/task-list-page.scss';

const AirPaxTaskListPage: FC = () => {
  const { getSessionId } = useContext(AuthContext);
  const { isPnrAccessRequested } = useContext(PnrAccessContext);
  const { getToken } = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>();

  const loadTaskPage = async () => {
    const taskClient = new StubTaskClient(getToken);
    const response = await taskClient.getTaskPage({
      modes: [],
      statuses: [],
      pagination: {
        offset: 0,
        limit: 100,
      },
    });
    setTasks(response.tasks);
  };

  const getComponentToShow = () => {
    if (isPnrAccessRequested(getSessionId())) {
      return <AirPaxTaskList tasks={tasks} />;
    }
    return <TriggerRequestPnrAccess />;
  };

  useEffect(() => {
    loadTaskPage();
  }, []);

  return <Layout>{getComponentToShow()}</Layout>;
};

export default AirPaxTaskListPage;
