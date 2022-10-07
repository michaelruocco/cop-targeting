import * as React from 'react';
import { FC, useContext } from 'react';
import { Task } from '../../adapters/task/task';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth/auth-context';
import { getClient } from '../../adapters/task/targeting-api-client';

import '../../styles/link-button.scss';

class Props {
  task: Task;
}

const ClaimButton: FC<Props> = ({ task }) => {
  const navigate = useNavigate();
  const { getToken } = useContext(AuthContext);
  const taskClient = getClient(getToken);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    taskClient.claimTask(task.id);
    navigate(`/task/${task.id}`);
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
