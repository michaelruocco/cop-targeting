import * as React from 'react';
import { FC } from 'react';
import TaskListCardPersonItem from './task-list-card-person-item';
import { Movement } from '../../../../adapters/task/task';
import TaskListCardHaulierItem from './task-list-card-haulier-item';
import TaskListCardPassengersItem from './task-list-card-passengers-item';
import TaskListCardVehicleItem from './task-list-card-vehicle-item';
import TaskListCardTrailerItem from './task-list-card-trailer-item';
import TaskListCardAccountItem from './task-list-card-account-item';
import TaskListCardGoodsItem from './task-list-card-goods-item';

class Props {
  movement: Movement;
}

const TaskListCardRoRoAccompaniedFreightMovementInfoSection: FC<Props> = ({
  movement,
}) => {
  return (
    <section className="task-list--movement-info-section">
      <div className="govuk-grid-row">
        <div className="govuk-grid-item">
          <TaskListCardPersonItem movement={movement} />
          <TaskListCardPassengersItem movement={movement} />
        </div>
        <div className="govuk-grid-item vertical-dotted-line">
          <TaskListCardVehicleItem movement={movement} />
          <TaskListCardTrailerItem movement={movement} />
        </div>
        <div className="govuk-grid-item vertical-dotted-line">
          <TaskListCardHaulierItem movement={movement} />
          <TaskListCardAccountItem movement={movement} />
        </div>
        <div className="govuk-grid-item vertical-dotted-line">
          <TaskListCardGoodsItem movement={movement} />
        </div>
      </div>
    </section>
  );
};

export default TaskListCardRoRoAccompaniedFreightMovementInfoSection;
