import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';

import '../../styles/link-button.scss';

class Props {
  task: Task;
}

const TaskAssignee: FC<Props> = ({ task }) => {
  const toText = (task: Task): string => {
    if (task.assignee) {
      return `Assigned to ${task.assignee}`;
    }
    return null;
  };

  return <span className="govuk-body task-list--assignee">{toText(task)}</span>;
};

export default TaskAssignee;
