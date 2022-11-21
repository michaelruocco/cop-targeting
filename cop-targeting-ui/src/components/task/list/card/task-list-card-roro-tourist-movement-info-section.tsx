import * as React from 'react';
import { FC } from 'react';
import TaskListCardPersonItem from './task-list-card-person-item';
import { Movement } from '../../../../adapters/task/task';
import TaskListCardBookingItem from './task-list-card-booking-item';
import TaskListCardCoTravellerItem from './task-list-card-co-traveller-item';
import TaskListCardVehicleItem from './task-list-card-vehicle-item';
import TaskListCardDocumentItem from './task-list-card-document-item';

class Props {
  movement: Movement;
}

const TaskListCardRoRoTouristMovementInfoSection: FC<Props> = ({
  movement,
}) => {
  const toSecondItem = (movement: Movement): React.ReactNode => {
    if (movement.vehicle) {
      return <TaskListCardVehicleItem movement={movement} />;
    }
    return <TaskListCardDocumentItem movement={movement} />;
  };

  return (
    <section className="task-list--movement-info-section">
      <div className="govuk-grid-row">
        <div className="govuk-grid-item">
          <TaskListCardPersonItem movement={movement} />
        </div>
        <div className="govuk-grid-item vertical-dotted-line">
          {toSecondItem(movement)}
        </div>
        <div className="govuk-grid-item vertical-dotted-line">
          <TaskListCardBookingItem movement={movement} />
        </div>
        <div className="govuk-grid-item vertical-dotted-line">
          <TaskListCardCoTravellerItem movement={movement} />
        </div>
      </div>
    </section>
  );
};

export default TaskListCardRoRoTouristMovementInfoSection;
