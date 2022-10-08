import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';
import TaskAssignee from './task-assignee';
import StatusTag from '../tags/status-tag';
import TaskDetailButtons from './task-detail-buttons';

import '../../styles/task-detail-page.scss';

class Props {
  task: Task;
  onTaskUnclaimed: (task: Task) => void;
}

const TaskDetailHeader: FC<Props> = ({ task, onTaskUnclaimed }) => {
  return (
    <div className="govuk-grid-row govuk-task-detail-header govuk-!-padding-bottom-9">
      <div className="govuk-grid-column-one-half">
        <h3 className="govuk-heading-xl govuk-!-margin-bottom-0">{task.id}</h3>
        <div>
          <StatusTag status={task.status} />
        </div>
        <TaskAssignee task={task} />
      </div>
      <TaskDetailButtons task={task} />
    </div>
  );
};

export default TaskDetailHeader;
