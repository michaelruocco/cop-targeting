import * as React from 'react';
import { FC } from 'react';
import * as _ from 'lodash';
import {
  TargetingIndicators,
  Task,
  toIndicatorsCountAndScoreText,
} from '../../../../adapters/task/task';
import ViewTaskDetailLink from './view-task-link';

class Props {
  task: Task;
}

const toIndicatorItems = (
  targetingIndicators: TargetingIndicators,
): React.ReactNode[] => {
  const nodes = [];
  nodes.push(
    <li
      key="target-indicator-count"
      className="govuk-!-font-weight-bold govuk-!-font-size-16"
    >
      {toIndicatorsCountAndScoreText(targetingIndicators)}
    </li>,
  );
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

const TaskListTargetIndicatorSection: FC<Props> = ({ task }) => {
  const targetingIndicators = task.risks.targetingIndicators;
  return (
    <section className="task-list--target-indicator-section">
      <div className="govuk-grid-row">
        <div className="govuk-grid-item">
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
            <ViewTaskDetailLink task={task} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskListTargetIndicatorSection;
