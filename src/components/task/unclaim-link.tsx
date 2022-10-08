import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';

import '../../styles/link-button.scss';

class Props {
  task: Task;
  onTaskUnclaimed: (task: Task) => void;
}

const UnclaimLink: FC<Props> = ({ task, onTaskUnclaimed }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    event.preventDefault();
    onTaskUnclaimed(task);
  };

  return (
    <>
      <button
        className="link-button govuk-!-font-size-19"
        onClick={handleClick}
      >
        Unclaim
      </button>{' '}
      from {task.assignee}
    </>
  );
};

export default UnclaimLink;
