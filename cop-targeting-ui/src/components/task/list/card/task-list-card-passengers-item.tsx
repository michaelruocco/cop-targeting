import * as React from 'react';
import { FC } from 'react';
import { Person } from '../../../../adapters/task/person';
import { Movement } from '../../../../adapters/task/task';
import * as pluralise from 'pluralize';

class Props {
  movement: Movement;
}

const buildPassengerCount = (
  otherPersons: Person[],
): React.ReactNode | React.ReactNode[] => {
  const text = buildPassengerCountText(otherPersons);
  return (
    <li key="co-traveller-0" className="govuk-!-font-weight-bold">
      {text}
    </li>
  );
};

const buildPassengerCountText = (otherPersons: Person[]): string => {
  const count = otherPersons?.length || 0;
  if (count < 1) {
    return 'None';
  }
  return pluralise('Passengers', count, true);
};

const TaskListCardPassengersItem: FC<Props> = ({ movement }) => {
  return (
    <>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        Passengers
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        {buildPassengerCount(movement.otherPersons)}
      </ul>
    </>
  );
};

export default TaskListCardPassengersItem;
