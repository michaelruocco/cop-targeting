import * as React from 'react';
import * as _ from 'lodash';
import { FC, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth/auth-context';
import { getClient } from '../../adapters/task/targeting-api-client';
import { Task } from '../../adapters/task/task';
import LoadingSpinner from '../../components/spinner/loading-spinner';
import Layout from '../../components/layout/layout';
import BackToTaskList from '../../components/task/back-to-task-list';
import { toTaskListLink } from '../../adapters/ui/links';

import '../../styles/task-detail-page.scss';
import TaskDetailHeader from '../../components/task/task-detail-header';

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
    navigate(toTaskListLink(task));
  };

  useEffect(() => {
    fetchTask().catch(console.error);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <Layout beforeMain={<BackToTaskList task={task} />}>
      <TaskDetailHeader task={task} onTaskUnclaimed={handleTaskUnclaimed} />
      <p>{JSON.stringify(task)}</p>
    </Layout>
  );
};

export default TaskDetailPage;
