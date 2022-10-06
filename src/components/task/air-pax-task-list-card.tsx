import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';
import TaskListCardAirPaxMovementInfoSection from './task-list-card-air-pax-movement-info-section';
import TaskListCardTitleSection from './task-list-card-title-section';
import TaskListCardJourneySection from './task-list-card-journey-section';
import TaskListTargetIndicatorSection from './task-list-card-target-indicator-section';

class Props {
  task: Task;
  onTaskUnclaimed: (task: Task) => void;
}

const AirPaxTaskListCard: FC<Props> = ({ task, onTaskUnclaimed }) => {
  return (
    <div className="govuk-task-list-card" key={task.id}>
      <div className="card-container">
        <TaskListCardTitleSection
          task={task}
          risks={task.risks}
          onTaskUnclaimed={onTaskUnclaimed}
        />
        <TaskListCardJourneySection movement={task.movement} />
        <TaskListCardAirPaxMovementInfoSection movement={task.movement} />
        <TaskListTargetIndicatorSection task={task} />
      </div>
    </div>
  );
};

export default AirPaxTaskListCard;
