import * as React from 'react';
import { FC } from 'react';

import '../../styles/link-button.scss';

class Props {
  taskId: string;
  onTaskClaimed: (taskId: string) => void;
}

const ClaimButton: FC<Props> = ({ taskId, onTaskClaimed }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    onTaskClaimed(taskId);
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
