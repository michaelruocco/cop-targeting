import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task-entities';

import '../../styles/link-button.scss';

class Props {
  task: Task;
  onTaskClaimed: (task: Task) => void;
}

const ClaimButton: FC<Props> = ({ task, onTaskClaimed }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    onTaskClaimed(task);
  };

  return (
    <button
      className="link-button govuk-!-font-weight-bold govuk-button"
      type="button"
      onClick={handleClick}
    >
      Claim
    </button>
  );
};

export default ClaimButton;
