import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { Task } from '../../../adapters/task/task';
import TaskDetailAssignee from './task-detail-assignee';
import StatusTag from '../../tag/task-status-tag';
import TaskDetailButtons from './task-detail-buttons';

class Props {
  task: Task;
  onTaskUnclaimed: (task: Task) => void;
}

const TaskDetailHeader: FC<Props> = ({ task, onTaskUnclaimed }) => {
  return (
    <div className="govuk-grid-row govuk-task-detail-header govuk-!-padding-bottom-6">
      <div className="govuk-grid-column-one-half">
        <h3 className="govuk-heading-xl govuk-!-margin-bottom-0">{task.id}</h3>
        <div>
          <StatusTag status={task.status} />
        </div>
        <TaskDetailAssignee task={task} onTaskUnclaimed={onTaskUnclaimed} />
      </div>
      <TaskDetailButtons task={task} />
    </div>
  );
};

export default TaskDetailHeader;
