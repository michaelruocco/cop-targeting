import * as React from 'react';
import { FC } from 'react';
import TaskListCardPersonItem from './task-list-card-person-item';
import { Movement } from '../../adapters/task/task';
import TaskListCardDocumentItem from './task-list-card-document-item';
import TaskListCardBookingItem from './task-list-card-booking-item';
import TaskListCardCoTravellerItem from './task-list-card-co-traveller-item';
import TaskListCardRouteItem from './task-list-card-route-item';

class Props {
  movement: Movement;
}

const TaskListCardMovementInfoSection: FC<Props> = ({ movement }) => {
  return (
    <section className="task-list--movement-info-section">
      <div className="govuk-grid-row">
        <TaskListCardPersonItem movement={movement} />
        <div className="govuk-grid-item vertical-dotted-line">
          <TaskListCardDocumentItem movement={movement} />
        </div>
        <div className="govuk-grid-item vertical-dotted-line">
          <TaskListCardBookingItem movement={movement} />
        </div>
        <div className="govuk-grid-item vertical-dotted-line">
          <TaskListCardCoTravellerItem movement={movement} />
          <TaskListCardRouteItem movement={movement} />
        </div>
      </div>
    </section>
  );
};

export default TaskListCardMovementInfoSection;
