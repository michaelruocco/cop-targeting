import * as React from 'react';
import { FC } from 'react';
import { Movement, MovementMode } from '../../adapters/task/task';

class Props {
  movement: Movement;
}

const toRoRoGroupDescription = (movement: Movement): string => {
  const vehicle = movement.vehicle;
  if (vehicle && vehicle.make && vehicle.model) {
    return `${vehicle.make} ${vehicle.model}`;
  }
  return toDefaultGroupDescription(movement.groupSize);
};

const toDefaultGroupDescription = (groupSize: number): string => {
  if (groupSize > 1) {
    return `In group of ${groupSize}`;
  }
  return 'Single passenger';
};

const toGroupDescription = (movement: Movement): string => {
  console.log(
    `group description mode ${movement.mode} ${
      movement.mode === MovementMode.RoRoTourist
    }`,
  );
  switch (movement.mode) {
    case MovementMode.RoRoAccompaniedFreight:
    case MovementMode.RoRoUnaccompaniedFreight:
    case MovementMode.RoRoTourist:
      return toRoRoGroupDescription(movement);
    case MovementMode.AirPassenger:
      return toDefaultGroupDescription(movement.groupSize);
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
