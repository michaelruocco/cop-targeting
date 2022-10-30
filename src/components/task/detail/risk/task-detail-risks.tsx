import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { Risks } from '../../../../adapters/task/task';
import TaskDetailSelectorGroups from './task-detail-selectors';
import TaskDetailRules from './task-detail-rules';
import TaskDetailTargetingIndicators from './task-detail-targeting-indicators';

class Props {
  risks: Risks;
}

const TaskDetailRisks: FC<Props> = ({ risks }) => {
  return (
    <>
      <TaskDetailSelectorGroups selectorGroups={risks.matchedSelectorGroups} />
      <TaskDetailRules rules={risks.matchedRules} />
      <TaskDetailTargetingIndicators
        targetingIndicators={risks.targetingIndicators}
      />
    </>
  );
};

export default TaskDetailRisks;
