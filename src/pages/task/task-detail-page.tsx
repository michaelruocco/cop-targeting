import * as React from 'react';
import * as _ from 'lodash';
import { FC, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../../contexts/auth/auth-context';
import { getClient } from '../../adapters/task/targeting-api-client';
import { Task } from '../../adapters/task/task';
import LoadingSpinner from '../../components/spinner/loading-spinner';

import '../../styles/task-list-page.scss';

const TaskDetailPage: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [task, setTask] = useState<Task>();
  const { getToken } = useContext(AuthContext);
  const taskClient = getClient(getToken);
  const { taskId } = useParams();

  const fetchTask = async () => {
    setLoading(true);
    const task = await taskClient.getTask(taskId);
    setTask(task);
    setLoading(false);
  };

  useEffect(() => {
    fetchTask().catch(console.error);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <h1>{taskId}</h1>
      <p>{JSON.stringify(task)}</p>
    </div>
  );
};

export default TaskDetailPage;
