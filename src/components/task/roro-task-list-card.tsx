import * as React from 'react';
import { FC } from 'react';
import { Movement, MovementMode, Task } from '../../adapters/task/task';
import RoRoTaskListCardMovementInfoSection from './task-list-card-roro-tourist-movement-info-section';
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
  const toMovementSection = (movement: Movement): React.ReactNode => {
    switch (movement.mode) {
      case MovementMode.RoRoTourist:
        return <RoRoTaskListCardMovementInfoSection movement={movement} />;
      default:
        return <></>;
    }
  };

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
        {toMovementSection(task.movement)}
        <TaskListTargetIndicatorSection
          task={task}
          onTaskViewed={onTaskViewed}
        />
      </div>
    </div>
  );
};

export default RoRoTaskListCard;
