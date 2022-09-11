import * as React from 'react';
import { FC } from 'react';
import * as _ from 'lodash';
import { Movement, MovementMode } from '../../adapters/task/task';

class Props {
  movement: Movement;
}

const toRoRoGroupDescription = (description: string): string => {
  return _.startCase(_.toLower(description.replace('-', ' ')));
};

const toAirPaxGroupDescription = (groupSize: number): string => {
  if (groupSize > 1) {
    return `In group of ${groupSize}`;
  }
  return 'Single passenger';
};

const toGroupDescription = (movement: Movement): string => {
  switch (movement.mode) {
    case MovementMode.RoRoAccompaniedFreight:
    case MovementMode.RoRoUnaccompaniedFreight:
    case MovementMode.RoRoTourist:
      return toRoRoGroupDescription(movement.description);
    case MovementMode.AirPassenger:
      return toAirPaxGroupDescription(movement.groupSize);
    default:
      return 'unknown';
  }
};

const GroupDescription: FC<Props> = ({ movement }) => {
  return (
    <p className="govuk-body-s content-line-one govuk-!-margin-bottom-0 govuk-!-padding-left-1">
      {toGroupDescription(movement)}
    </p>
  );
};

export default GroupDescription;
