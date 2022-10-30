import * as React from 'react';
import * as _ from 'lodash';
import { FC, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from '../../../contexts/auth/auth-context';
import { getClient } from '../../../adapters/task/targeting-api-client';
import { Task } from '../../../adapters/task/task';
import LoadingSpinner from '../../spinner/loading-spinner';
import Layout from '../../layout/layout';
import { toTaskListLink } from '../../../app-router';
import BackToTaskList from './back-to-task-list';
import TaskDetailHeader from './task-detail-header';
import TaskDetailActivityList from './activity/task-detail-activity-list';
import TaskDetailRisks from './risk/task-detail-risks';

import './task-detail-page.scss';

const TaskDetailPage: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [task, setTask] = useState<Task>();
  const { getToken } = useContext(AuthContext);
  const taskClient = getClient(getToken);
  const { taskId } = useParams();
  const navigate = useNavigate();

  const fetchTask = async () => {
    setLoading(true);
    const task = await taskClient.getTask(taskId);
    setTask(task);
    setLoading(false);
  };

  const handleTaskUnclaimed = (task: Task) => {
    taskClient.unclaimTask(task.id);
    navigate(toTaskListLink(task.movement.mode));
  };

  useEffect(() => {
    fetchTask().catch(console.error);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const items = [
    {
      expanded: false,
      heading: <div>heading</div>,
      summary: <div>summary</div>,
      child: <div>child</div>,
    },
  ];

  return (
    <Layout beforeMain={<BackToTaskList task={task} />}>
      <TaskDetailHeader task={task} onTaskUnclaimed={handleTaskUnclaimed} />
      <TaskDetailRisks risks={task.risks} />
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <div className="govuk-grid-row"></div>
          <div className="govuk-grid-row" style={{ marginTop: '10px' }}>
            <p style={{ wordWrap: 'break-word' }}>{JSON.stringify(task)}</p>
          </div>
        </div>
        <div className="govuk-grid-column-one-third">
          <TaskDetailActivityList notes={task.notes} />
        </div>
      </div>
    </Layout>
  );
};

export default TaskDetailPage;
