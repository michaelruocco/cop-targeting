import * as React from 'react';
import { FC } from 'react';
import {
  formatPersonLastName,
  formatPersonFirstName,
  Person,
} from '../../../adapters/task/person';
import { Movement } from '../../../adapters/task/task';

class Props {
  movement: Movement;
}

const formatName = (person: Person): string => {
  return `${formatPersonLastName(person)}, ${formatPersonFirstName(person)}`;
};

const liClassName = 'govuk-!-font-weight-bold';
const buildNameComponents = (
  otherPersons: Person[],
): React.ReactNode | React.ReactNode[] => {
  if (!otherPersons || otherPersons.length < 1) {
    return <li className={liClassName}>None</li>;
  }

  const maxToDisplay = 4;
  const remaining = Math.max(otherPersons.length - maxToDisplay, 0);
  const names = otherPersons
    .slice(0, maxToDisplay)
    .map((person) => formatName(person));
  if (remaining > 0) {
    const lastName = names.pop();
    names.push(`${lastName} plus ${remaining} more`);
  }
  return names.map((name, index) => {
    return (
      <li key={`co-traveller-${index}`} className={liClassName}>
        {name}
      </li>
    );
  });
};

const TaskListCardCoTravellerItem: FC<Props> = ({ movement }) => {
  return (
    <>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        Co-Travellers
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        {buildNameComponents(movement.otherPersons)}
      </ul>
    </>
  );
};

export default TaskListCardCoTravellerItem;
