import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';
import TaskListCardMovementInfoSection from './task-list-card-movement-info-section';
import TaskListCardTitleSection from './task-list-card-title-section';
import TaskListCardVoyageSection from './task-list-card-voyage-section';
import TaskListTargetIndicatorSection from './task-list-card-target-indicator-section';

class Props {
  task: Task;
  onTaskClaimed: (task: Task) => void;
  onTaskUnclaimed: (task: Task) => void;
  onTaskViewed: (task: Task) => void;
}

const AirPaxTaskListCard: FC<Props> = ({
  task,
  onTaskClaimed,
  onTaskUnclaimed,
  onTaskViewed,
}) => {
  return (
    <div className="govuk-task-list-card" key={task.id}>
      <div className="card-container">
        <TaskListCardTitleSection
          task={task}
          risks={task.risks}
          onTaskClaimed={onTaskClaimed}
          onTaskUnclaimed={onTaskUnclaimed}
        />
        <TaskListCardVoyageSection movement={task.movement} />
        <TaskListCardMovementInfoSection movement={task.movement} />
        <TaskListTargetIndicatorSection
          task={task}
          onTaskViewed={onTaskViewed}
        />
      </div>
    </div>
  );
};

export default AirPaxTaskListCard;
