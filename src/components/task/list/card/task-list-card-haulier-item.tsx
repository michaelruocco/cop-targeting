import * as React from 'react';
import { FC } from 'react';
import { Movement } from '../../../../adapters/task/task';

class Props {
  movement: Movement;
}

const TaskListCardHaulierItem: FC<Props> = ({ movement }) => {
  const haulier = movement.haulier;
  return (
    <>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        Haulier
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-bold">
          {haulier?.name || 'Unknown'}
        </li>
      </ul>
    </>
  );
};

export default TaskListCardHaulierItem;
