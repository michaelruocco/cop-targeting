import * as React from 'react';
import { FC } from 'react';
import {
  formatDocumentCountryOfIssue,
  formatDocumentNumber,
  formatDocumentValidFrom,
  formatDocumentExpiry,
} from '../../adapters/task/person';
import { Movement } from '../../adapters/task/task';

class Props {
  movement: Movement;
}

const TaskListCardVehicleItem: FC<Props> = ({ movement }) => {
  const vehicle = movement.vehicle;
  return (
    <>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        Vehicle
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-bold">
          {vehicle.registrationNumber || 'Unknown'}
        </li>
      </ul>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
        <li className="govuk-!-font-weight-regular">
          {vehicle.make || 'Unknown'} {vehicle.model || 'Unknown'}
        </li>
      </ul>
    </>
  );
};

export default TaskListCardVehicleItem;
