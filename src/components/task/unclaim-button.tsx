import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';

import '../../styles/link-button.scss';

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
    <button
      className="link-button govuk-!-font-weight-bold govuk-button"
      type="button"
      onClick={handleClick}
    >
      Unclaim
    </button>
  );
};

export default UnclaimButton;
