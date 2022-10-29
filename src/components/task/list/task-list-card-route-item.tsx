import * as React from 'react';
import { FC } from 'react';

import { Journey, Movement } from '../../../adapters/task/task';

class Props {
  movement: Movement;
}

const formatRoute = (journey: Journey): string => {
  if (!journey?.route) {
    return 'Unknown';
  }
  return journey.route.join(' → ');
};

const TaskListCardRouteItem: FC<Props> = ({ movement }) => {
  return (
    <>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        Route
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-regular">
          {formatRoute(movement.journey)}
        </li>
      </ul>
    </>
  );
};

export default TaskListCardRouteItem;
