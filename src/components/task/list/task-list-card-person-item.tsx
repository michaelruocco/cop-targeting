import * as React from 'react';
import { FC } from 'react';
import {
  formatGender,
  formatPersonLastName,
  formatPersonFirstName,
  formatPersonNationality,
  formatPersonDateOfBirth,
  formatPersonRole,
} from '../../../adapters/task/person';
import { Movement } from '../../../adapters/task/task';

class Props {
  movement: Movement;
}

const TaskListCardPersonItem: FC<Props> = ({ movement }) => {
  const person = movement.person;
  return (
    <>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        {formatPersonRole(person)}
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-bold">
          {formatPersonLastName(person)}
        </li>
        <li className="govuk-!-font-weight-regular">
          {formatPersonFirstName(person)}
        </li>
      </ul>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-regular">{formatGender(person)}</li>
        <li className="govuk-!-font-weight-regular">
          {formatPersonDateOfBirth(person)}
        </li>
        <li className="govuk-!-font-weight-regular">
          {formatPersonNationality(person)}
        </li>
      </ul>
    </>
  );
};

export default TaskListCardPersonItem;
