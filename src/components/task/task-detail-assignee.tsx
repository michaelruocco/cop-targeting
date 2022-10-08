import * as React from 'react';
import { FC } from 'react';
import { isAssigned, Task } from '../../adapters/task/task';
import UnclaimLink from './unclaim-link';

import '../../styles/link-button.scss';

class Props {
  task: Task;
  onTaskUnclaimed: (task: Task) => void;
}

const TaskDetailAssignee: FC<Props> = ({ task, onTaskUnclaimed }) => {
  const toComponent = (task: Task): React.ReactElement => {
    if (isAssigned(task)) {
      return <UnclaimLink task={task} onTaskUnclaimed={onTaskUnclaimed} />;
    }
    return null;
  };

  return <span className="govuk-body">{toComponent(task)}</span>;
};

export default TaskDetailAssignee;
