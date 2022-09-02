import * as React from 'react';
import { FC } from 'react';
import TaskListCardPersonItem from './task-list-card-person-item';
import { Movement } from '../../adapters/task/task';
import TaskListCardDocumentItem from './task-list-card-document-item';
import TaskListCardBookingItem from './task-list-card-booking-item';

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
          <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
            Co-travellers
          </h3>
          <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
            Laura Ruocco
          </ul>
          <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
            Route
          </h3>
          <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
            <li className="govuk-!-font-weight-regular">
              CDG - YYZ - YYC - LHR
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TaskListCardMovementInfoSection;
