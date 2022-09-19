import * as React from 'react';
import { FC } from 'react';
import { Movement } from '../../adapters/task/task';
import TaskListCardHaulierItem from './task-list-card-haulier-item';
import TaskListCardTrailerItem from './task-list-card-trailer-item';
import TaskListCardAccountItem from './task-list-card-account-item';
import TaskListCardGoodsItem from './task-list-card-goods-item';

class Props {
  movement: Movement;
}

const TaskListCardRoRoUnaccompaniedFreightMovementInfoSection: FC<Props> = ({
  movement,
}) => {
  return (
    <section className="task-list--movement-info-section">
      <div className="govuk-grid-row">
        <div className="govuk-grid-item">
          <TaskListCardTrailerItem movement={movement} />
        </div>
        <div className="govuk-grid-item vertical-dotted-line">
          <TaskListCardHaulierItem movement={movement} />
          <TaskListCardAccountItem movement={movement} />
        </div>
        <div className="govuk-grid-item vertical-dotted-line">
          <TaskListCardGoodsItem movement={movement} />
        </div>
        <div className="govuk-grid-item vertical-dotted-line"></div>
      </div>
    </section>
  );
};

export default TaskListCardRoRoUnaccompaniedFreightMovementInfoSection;
