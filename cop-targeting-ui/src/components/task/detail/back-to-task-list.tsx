import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../../adapters/task/task';
import { toTaskListLink } from '../../../app-router';
import { Link } from 'react-router-dom';

class Props {
  task: Task;
}

const BackToTaskList: FC<Props> = ({ task }) => {
  return (
    <Link className="govuk-back-link" to={toTaskListLink(task.movement.mode)}>
      Back to task list
    </Link>
  );
};

export default BackToTaskList;
