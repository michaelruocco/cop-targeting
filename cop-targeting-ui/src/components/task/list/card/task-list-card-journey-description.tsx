import * as React from 'react';
import { FC } from 'react';
import * as _ from 'lodash';
import {
  Juncture,
  Movement,
  MovementMode,
} from '../../../../adapters/task/task';
import {
  calcuateTimeFromNow,
  isFuture,
  toLongDateTimeFormat,
} from '../../../../adapters/date/date';

class Props {
  movement: Movement;
}

const toJourneyId = (movement: Movement): string => {
  switch (movement.mode) {
    case MovementMode.AirPassenger:
      return movement.flight?.number || 'unknown';
    default:
      return '';
  }
};

const toJourneyIdComponents = (movement: Movement): React.ReactNode => {
  const journeyId = toJourneyId(movement);
  if (!journeyId) {
    return <></>;
  }
  return (
    <>
      <span className="govuk-!-font-weight-bold"> {toJourneyId(movement)}</span>
      <span className="dot" />
    </>
  );
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

const toRoRoJourneyDetails = (movement: Movement): string => {
  const operator = movement.vessel?.operator || 'unknown';
  const vessel = movement.vessel?.name || 'unknown';
  const arrival = formatArrival(movement.journey?.arrival);
  return `${operator} voyage of ${vessel}, ${arrival}`;
};

const toAirPaxJourneyDetails = (movement: Movement): string => {
  const operator = movement.flight?.operator || 'unknown';
  const number = movement.flight?.number || 'unknown';
  const arrival = formatArrival(movement.journey?.arrival);
  return `${operator}, flight ${number}, ${arrival}`;
};

const formatJourneyDetails = (movement: Movement): string => {
  switch (movement.mode) {
    case MovementMode.RoRoAccompaniedFreight:
    case MovementMode.RoRoUnaccompaniedFreight:
    case MovementMode.RoRoTourist:
      return toRoRoJourneyDetails(movement);
    case MovementMode.AirPassenger:
      return toAirPaxJourneyDetails(movement);
    default:
      return 'unknown';
  }
};

const JourneyDescription: FC<Props> = ({ movement }) => {
  const journeyIdComponents = toJourneyIdComponents(movement);
  return (
    <>
      <p className="content-line-one govuk-!-padding-right-2">
        {formatJourneyDetails(movement)}
      </p>
      <p className="govuk-body-s content-line-two govuk-!-padding-right-2">
        <>
          {journeyIdComponents}
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
    </>
  );
};

export default JourneyDescription;
