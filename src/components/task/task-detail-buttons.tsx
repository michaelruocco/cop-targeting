import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { isInProgress, Task } from '../../adapters/task/task';
import { Button } from '@ukhomeoffice/cop-react-components';

import '../../styles/task-detail-page.scss';

class Props {
  task: Task;
}

const TaskDetailButtons: FC<Props> = ({ task }) => {
  const toButtons = (task: Task) => {
    if (isInProgress(task)) {
      return inProgressButtons();
    }
    return null;
  };

  const inProgressButtons = () => {
    return (
      <div>
        <Button className="govuk-button--primary govuk-!-margin-right-1">
          Issue
        </Button>
        <Button className="govuk-button--secondary govuk-!-margin-right-1">
          Complete
        </Button>
        <Button className="govuk-button--warning govuk-!-margin-right-1">
          Dismiss
        </Button>
      </div>
    );
  };

  return (
    <div className="govuk-grid-column-one-half task-actions--buttons">
      {toButtons(task)}
    </div>
  );
};

export default TaskDetailButtons;
