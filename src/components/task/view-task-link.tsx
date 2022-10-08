import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../../adapters/task/task';
import { toTaskDetailLink } from '../../adapters/links/links';

class Props {
  task: Task;
}

const ViewTaskDetailLink: FC<Props> = ({ task }) => {
  return (
    <Link
      className="govuk-link govuk-link--no-visited-state govuk-!-font-weight-bold"
      to={toTaskDetailLink(task.id)}
    >
      View Details
    </Link>
  );
};

export default ViewTaskDetailLink;
