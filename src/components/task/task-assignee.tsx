import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';

import '../../styles/link-button.scss';

class Props {
  task: Task;
}

const TaskAssignee: FC<Props> = ({ task }) => {
  return (
    <span className="govuk-body task-list--assignee">
      Assigned to {task.assignee}&nbsp;
    </span>
  );
};

export default TaskAssignee;
