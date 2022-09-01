import * as React from 'react';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Task } from '../../adapters/task/task-entities';

class Props {
  task: Task;
  onTaskViewed: (task: Task) => void;
}

const ViewTaskDetailsLink: FC<Props> = ({ task, onTaskViewed }) => {
  const location = useLocation();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.blur();
    event.preventDefault();
    onTaskViewed(task);
  };
  return (
    <Link
      className="govuk-link govuk-link--no-visited-state govuk-!-font-weight-bold"
      onClick={handleClick}
      to={`${location.pathname}`}
    >
      View Details
    </Link>
  );
};

export default ViewTaskDetailsLink;
