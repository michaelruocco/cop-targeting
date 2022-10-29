import * as React from 'react';
import { FC } from 'react';
import { Movement, MovementMode, Task } from '../../../../adapters/task/task';
import TaskListCardRoRoTouristMovementInfoSection from './task-list-card-roro-tourist-movement-info-section';
import TaskListCardRoRoAccompaniedFreightMovementInfoSection from './task-list-card-roro-accompanied-freight-movement-info-section';
import TaskListCardRoRoUnaccompaniedFreightMovementInfoSection from './task-list-card-roro-unaccompanied-freight-movement-info-section';
import TaskListCardTitleSection from './task-list-card-title-section';
import TaskListCardJourneySection from './task-list-card-journey-section';
import TaskListTargetIndicatorSection from './task-list-card-target-indicator-section';

class Props {
  task: Task;
  onTaskUnclaimed: (task: Task) => void;
}

const RoRoTaskListCard: FC<Props> = ({ task, onTaskUnclaimed }) => {
  const toMovementSection = (movement: Movement): React.ReactNode => {
    switch (movement.mode) {
      case MovementMode.RoRoTourist:
        return (
          <TaskListCardRoRoTouristMovementInfoSection movement={movement} />
        );
      case MovementMode.RoRoAccompaniedFreight:
        return (
          <TaskListCardRoRoAccompaniedFreightMovementInfoSection
            movement={movement}
          />
        );

      case MovementMode.RoRoUnaccompaniedFreight:
        return (
          <TaskListCardRoRoUnaccompaniedFreightMovementInfoSection
            movement={movement}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="govuk-task-list-card" key={task.id}>
      <div className="card-container">
        <TaskListCardTitleSection
          task={task}
          risks={task.risks}
          onTaskUnclaimed={onTaskUnclaimed}
        />
        <TaskListCardJourneySection movement={task.movement} />
        {toMovementSection(task.movement)}
        <TaskListTargetIndicatorSection task={task} />
      </div>
    </div>
  );
};

export default RoRoTaskListCard;
