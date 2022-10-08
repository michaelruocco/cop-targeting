import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { isInProgress, isNew, Task } from '../../adapters/task/task';
import ClaimButton from './claim-button';
import UnclaimButton from './unclaim-button';

import '../../styles/task-detail-page.scss';

class Props {
  task: Task;
  onTaskUnclaimed: (task: Task) => void;
}

const TaskDetailButtons: FC<Props> = ({ task, onTaskUnclaimed }) => {
  const toButtons = (task: Task) => {
    if (isNew(task)) {
      return <ClaimButton task={task} />;
    }
    if (isInProgress(task)) {
      return <UnclaimButton task={task} onTaskUnclaimed={onTaskUnclaimed} />;
    }
    return null;
  };

  return (
    <div className="govuk-grid-column-one-half task-actions--buttons">
      {toButtons(task)}
    </div>
  );
};

export default TaskDetailButtons;
