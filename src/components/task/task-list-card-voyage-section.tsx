import * as React from 'react';
import { FC } from 'react';
import * as _ from 'lodash';
import { Juncture, Movement } from '../../adapters/task/task';
import { formatPersonRole } from '../../adapters/task/person';
import {
  calcuateTimeFromNow,
  isFuture,
  toLongDateTimeFormat,
} from '../../adapters/date/date';
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

const formatFlightDetails = (movement: Movement): string => {
  const flight = movement.flight;
  const arrival = movement.journey?.arrival;
  return `${flight.operator}, flight ${flight.number}, ${formatArrival(
    arrival,
  )}`;
};

const formatArrival = (arrival: Juncture): string => {
  const time = arrival?.time;
  const location = formatLocation(arrival);
  if (!time) {
    return 'arrival details unknown';
  }
  const prefix = isFuture(time) ? 'arriving' : 'arrived';
  return `${prefix} at ${location} ${calcuateTimeFromNow(time)}`;
};

const formatLocation = (juncture: Juncture): string => {
  return juncture?.location || 'unknown';
};

const TaskListCardVoyageSection: FC<Props> = ({ movement }) => {
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
                {formatPersonRole(movement.person)}{' '}
                <AirPaxDepartureStatus
                  status={movement.flight?.departureStatus}
                />
              </span>
            </span>
          </div>
          <div className="govuk-grid-column-three-quarters govuk-!-padding-right-7 align-right">
            <i className="c-icon-aircraft"></i>
            <p className="content-line-one govuk-!-padding-right-2">
              {formatFlightDetails(movement)}
            </p>
            <p className="govuk-body-s content-line-two govuk-!-padding-right-2">
              <>
                <span className="govuk-!-font-weight-bold">
                  {' '}
                  {movement.flight?.number || 'Unknown'}
                </span>
                <span className="dot" />
                {toLongDateTimeFormat(movement.journey?.departure?.time)}
                <span className="dot" />
                <span className="govuk-!-font-weight-bold">
                  {formatLocation(movement.journey?.departure)}
                </span>{' '}
                &#8594;
                <span className="govuk-!-font-weight-bold">
                  {' '}
                  {formatLocation(movement.journey?.arrival)}
                </span>
                <span className="dot" />
                {toLongDateTimeFormat(movement.journey?.arrival?.time)}
              </>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskListCardVoyageSection;
