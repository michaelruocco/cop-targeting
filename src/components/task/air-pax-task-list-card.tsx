import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';
import TaskListCardAirPaxMovementInfoSection from './task-list-card-air-pax-movement-info-section';
import TaskListCardTitleSection from './task-list-card-title-section';
import TaskListCardJourneySection from './task-list-card-journey-section';
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
        <TaskListCardJourneySection movement={task.movement} />
        <TaskListCardAirPaxMovementInfoSection movement={task.movement} />
        <TaskListTargetIndicatorSection
          task={task}
          onTaskViewed={onTaskViewed}
        />
      </div>
    </div>
  );
};

export default AirPaxTaskListCard;
