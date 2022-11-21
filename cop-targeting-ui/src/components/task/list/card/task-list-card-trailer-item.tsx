import * as React from 'react';
import { FC } from 'react';
import { Movement, Trailer } from '../../../../adapters/task/task';

class Props {
  movement: Movement;
}

const formatTrailerRegistrationNumber = (trailer: Trailer): string => {
  if (trailer) {
    return trailer.registrationNumber || 'Unknown';
  }
  return 'None';
};

const TaskListCardTrailerItem: FC<Props> = ({ movement }) => {
  const trailer = movement.trailer;
  return (
    <>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        Trailer
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-bold">
          {formatTrailerRegistrationNumber(trailer)}
        </li>
      </ul>
    </>
  );
};

export default TaskListCardTrailerItem;
