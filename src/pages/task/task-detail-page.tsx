import * as React from 'react';
import * as _ from 'lodash';
import { FC, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth/auth-context';
import { getClient } from '../../adapters/task/targeting-api-client';
import { Task } from '../../adapters/task/task';
import LoadingSpinner from '../../components/spinner/loading-spinner';
import Layout from '../../components/layout/layout';
import { TaskStatus } from '../../adapters/task/task-status';
import NewTag from '../../components/tags/new-tag';
import ClaimButton from '../../components/task/claim-button';
import TaskAssignee from '../../components/task/task-assignee';
import UnclaimButton from '../../components/task/unclaim-button';

import '../../styles/task-detail-page.scss';

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
    navigate('/');
  };

  useEffect(() => {
    fetchTask().catch(console.error);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  const backLink = (
    <Link className="govuk-back-link" to="/">
      Back to task list
    </Link>
  );
  return (
    <Layout beforeMain={backLink}>
      <div className="govuk-grid-row govuk-task-detail-header govuk-!-padding-bottom-9">
        <div className="govuk-grid-column-one-half">
          <h3 className="govuk-heading-xl govuk-!-margin-bottom-0">
            {task.id}
          </h3>
          {task.status === TaskStatus.New && (
            <div>
              <NewTag />
            </div>
          )}
          {task.status === TaskStatus.InProgress && (
            <TaskAssignee task={task} />
          )}
        </div>
        {task.status === TaskStatus.New && (
          <div className="govuk-grid-column-one-half task-actions--buttons">
            <ClaimButton task={task} />
          </div>
        )}
        {task.status === TaskStatus.InProgress && (
          <div className="govuk-grid-column-one-half task-actions--buttons">
            <UnclaimButton task={task} onTaskUnclaimed={handleTaskUnclaimed} />
          </div>
        )}
      </div>
      <p>{JSON.stringify(task)}</p>
    </Layout>
  );
};

export default TaskDetailPage;
