import * as React from 'react';
import { FC } from 'react';
import { Movement } from '../../../adapters/task/task';

class Props {
  movement: Movement;
}

const TaskListCardHaulierItem: FC<Props> = ({ movement }) => {
  const goods = movement.goods;
  return (
    <>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        Goods
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-bold">
          {goods?.description || 'Unknown'}
        </li>
      </ul>
    </>
  );
};

export default TaskListCardHaulierItem;
