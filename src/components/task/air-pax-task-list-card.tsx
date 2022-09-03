import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/task';
import TaskListCardMovementInfoSection from './task-list-card-movement-info-section';
import TaskListCardTitleSection from './task-list-card-title-section';
import TaskListCardVoyageSection from './task-list-card-voyage-section';
import ViewTaskDetailsLink from './view-task-details-link';

class Props {
  task: Task;
  onTaskClaimed: (task: Task) => void;
  onTaskUnclaimed: (task: Task) => void;
  onTaskViewed: (task: Task) => void;
}

const AirPaxTaskListCard: FC<Props> = ({
  task,
  onTaskClaimed,
  onTaskUnclaimed,
  onTaskViewed,
}) => {
  return (
    <div className="govuk-task-list-card" key={task.id}>
      <div className="card-container">
        <TaskListCardTitleSection
          task={task}
          risks={task.risks}
          onTaskClaimed={onTaskClaimed}
          onTaskUnclaimed={onTaskUnclaimed}
        />
        <TaskListCardVoyageSection movement={task.movement} />
        <TaskListCardMovementInfoSection movement={task.movement} />
        <section className="task-list--target-indicator-section">
          <div className="govuk-grid-row">
            <div className="govuk-grid-item">
              <div className="govuk-grid-column">
                <ul className="govuk-list task-labels govuk-!-margin-top-2">
                  <li className="task-labels-item">
                    <strong className="govuk-!-font-weight-bold govuk-!-font-size-16">
                      Risk Score: 0
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="govuk-grid-column">
                <ul className="govuk-list task-labels govuk-!-margin-top-0">
                  <li className="task-labels-item">
                    <ul className="govuk-list item-list--bulleted">
                      <li className="govuk-!-font-weight-bold govuk-!-font-size-16">
                        1 indicator
                      </li>
                      <li className="threat-indicator-bullet govuk-!-font-size-16">
                        Infrequent trips made through port (person)
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="govuk-grid-item task-link-container">
              <div>
                <ViewTaskDetailsLink task={task} onTaskViewed={onTaskViewed} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AirPaxTaskListCard;
