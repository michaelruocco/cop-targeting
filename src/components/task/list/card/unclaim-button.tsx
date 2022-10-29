import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../../../adapters/task/task';
import { Button } from '@ukhomeoffice/cop-react-components';

import '../../../../styles/link-button.scss';

class Props {
  task: Task;
  onTaskUnclaimed: (task: Task) => void;
}

const UnclaimButton: FC<Props> = ({ task, onTaskUnclaimed }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    onTaskUnclaimed(task);
  };

  return (
    <Button
      className="govuk-button--primary link-button govuk-!-font-weight-bold"
      onClick={handleClick}
    >
      Unclaim
    </Button>
  );
};

export default UnclaimButton;
