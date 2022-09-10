import * as React from 'react';
import { FC } from 'react';
import * as _ from 'lodash';
import {
  TargetingIndicator,
  TargetingIndicators,
  Task,
} from '../../adapters/task/task';
import ViewTaskDetailsLink from './view-task-details-link';

class Props {
  task: Task;
  onTaskViewed: (task: Task) => void;
}

const formatCount = (count: number): string => {
  if (count == 1) {
    return `${count} indicator`;
  }
  return `${count} indicators`;
};

const toIndicatorItems = (
  targetingIndicators: TargetingIndicators,
): React.ReactNode[] => {
  const nodes = [];
  if (targetingIndicators.count > 0) {
    nodes.push(
      <li
        key="target-indicator-count"
        className="govuk-!-font-weight-bold govuk-!-font-size-16"
      >
        {formatCount(targetingIndicators.count)}
      </li>,
    );
  }
  targetingIndicators.indicators.map((indicator) => {
    const key = `target-indicator-${indicator.id}`;
    nodes.push(
      <li key={key} className="threat-indicator-bullet govuk-!-font-size-16">
        {indicator.description}
      </li>,
    );
  });
  return nodes;
};

const TaskListTargetIndicatorSection: FC<Props> = ({ task, onTaskViewed }) => {
  const targetingIndicators = task.risks.targetingIndicators;
  return (
    <section className="task-list--target-indicator-section">
      <div className="govuk-grid-row">
        <div className="govuk-grid-item">
          <div className="govuk-grid-column">
            <ul className="govuk-list task-labels govuk-!-margin-top-2">
              <li className="task-labels-item">
                <strong className="govuk-!-font-weight-bold govuk-!-font-size-16">
                  Risk Score: {targetingIndicators.score}
                </strong>
              </li>
            </ul>
          </div>
          <div className="govuk-grid-column">
            <ul className="govuk-list task-labels govuk-!-margin-top-0">
              <li className="task-labels-item">
                <ul className="govuk-list item-list--bulleted">
                  {toIndicatorItems(targetingIndicators)}
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
  );
};

export default TaskListTargetIndicatorSection;
