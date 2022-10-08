import * as React from 'react';
import * as _ from 'lodash';
import { FC, useContext } from 'react';
import { isAssignedTo, isNew, Task } from '../../adapters/task/task';
import { Button } from '@ukhomeoffice/cop-react-components';
import AuthContext from '../../contexts/auth/auth-context';
import ClaimButton from './claim-button';

import '../../styles/task-detail-page.scss';

class Props {
  task: Task;
}

const TaskDetailButtons: FC<Props> = ({ task }) => {
  const { getUserEmail } = useContext(AuthContext);
  const toButtons = (task: Task) => {
    if (isNew(task)) {
      return <ClaimButton task={task} />;
    }
    if (isAssignedTo(task, getUserEmail())) {
      return taskActionButtons();
    }
    return null;
  };

  const taskActionButtons = () => {
    return (
      <div>
        <Button className="govuk-button--primary govuk-!-margin-right-1">
          Issue target
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
