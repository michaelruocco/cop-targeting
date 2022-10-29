import * as React from 'react';
import { FC } from 'react';
import TaskListCardAirPaxPersonItem from './task-list-card-air-pax-person-item';
import { Movement } from '../../../adapters/task/task';
import TaskListCardDocumentItem from './task-list-card-document-item';
import TaskListCardBookingItem from './task-list-card-booking-item';
import TaskListCardCoTravellerItem from './task-list-card-co-traveller-item';
import TaskListCardRouteItem from './task-list-card-route-item';

class Props {
  movement: Movement;
}

const TaskListCardAirPaxMovementInfoSection: FC<Props> = ({ movement }) => {
  return (
    <section className="task-list--movement-info-section">
      <div className="govuk-grid-row">
        <div className="govuk-grid-item">
          <TaskListCardAirPaxPersonItem movement={movement} />
        </div>
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

export default TaskListCardAirPaxMovementInfoSection;
