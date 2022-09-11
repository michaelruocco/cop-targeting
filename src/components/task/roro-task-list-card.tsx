import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';
import AirPaxTaskListCardMovementInfoSection from './air-pax-task-list-card-movement-info-section';
import TaskListCardTitleSection from './task-list-card-title-section';
import TaskListCardJourneySection from './task-list-card-journey-section';
import TaskListTargetIndicatorSection from './task-list-card-target-indicator-section';

class Props {
  task: Task;
  onTaskClaimed: (task: Task) => void;
  onTaskUnclaimed: (task: Task) => void;
  onTaskViewed: (task: Task) => void;
}

const RoRoTaskListCard: FC<Props> = ({
  task,
  onTaskClaimed,
  onTaskUnclaimed,
  onTaskViewed,
}) => {
  //TODO Rename movement info section to air pax movement info section and replace with roro movement info section
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
        <TaskListTargetIndicatorSection
          task={task}
          onTaskViewed={onTaskViewed}
        />
      </div>
    </div>
  );
};

export default RoRoTaskListCard;
