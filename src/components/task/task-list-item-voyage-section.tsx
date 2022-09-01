import * as React from 'react';
import { FC } from 'react';
import * as _ from 'lodash';
import { Movement, PersonRole } from '../../adapters/task/targeting-api-client';
import AirPaxDepartureStatus from './air-pax-departure-status';

class Props {
  movement: Movement;
}

const toGroupDescription = (groupSize: number): string => {
  if (groupSize > 1) {
    return `In group of ${groupSize}`;
  }
  return 'Single passenger';
};

const formatPersonRole = (role: PersonRole): string => {
  return _.startCase(_.toLower(role));
};

const TaskListItemVoyageSection: FC<Props> = ({ movement }) => {
  return (
    <section className="task-list--voyage-section">
      <div>
        <div className="govuk-grid-row grid-background--greyed">
          <div className="govuk-grid-column-one-quarter govuk-!-padding-left-9">
            <i className="icon-position--left c-icon-person"></i>
            <p className="govuk-body-s content-line-one govuk-!-margin-bottom-0 govuk-!-padding-left-1">
              {toGroupDescription(movement.groupSize)}
            </p>
            <span className="govuk-body-s govuk-!-margin-bottom-0 govuk-!-font-weight-bold govuk-!-padding-left-1">
              <span className="govuk-font-weight-bold">
                {formatPersonRole(movement.person.role)}{' '}
                <AirPaxDepartureStatus
                  status={movement.flight.departureStatus}
                />
              </span>
            </span>
          </div>
          <div className="govuk-grid-column-three-quarters govuk-!-padding-right-7 align-right">
            <i className="c-icon-aircraft"></i>
            <p className="content-line-one govuk-!-padding-right-2">
              British Airways, flight BA0103, arrived 17 days ago
            </p>
            <p className="govuk-body-s content-line-two govuk-!-padding-right-2">
              <span className="govuk-!-font-weight-bold">BA0103</span>
              <span className="dot"></span>10 Jul 2022 at 12:30
              <span className="dot"></span>
              <span className="govuk-!-font-weight-bold">LHR</span> →
              <span className="govuk-!-font-weight-bold"> YYC</span>
              <span className="dot"></span>10 Jul 2022 at 15:30
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskListItemVoyageSection;
