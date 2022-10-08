import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';
import { toTaskListLink } from '../../adapters/ui/links';
import { Link } from 'react-router-dom';

import '../../styles/link-button.scss';

class Props {
  task: Task;
}

const BackToTaskList: FC<Props> = ({ task }) => {
  return (
    <Link className="govuk-back-link" to={toTaskListLink(task)}>
      Back to task list
    </Link>
  );
};

export default BackToTaskList;
