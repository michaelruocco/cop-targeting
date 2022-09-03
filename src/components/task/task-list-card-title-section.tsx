import * as React from 'react';
import { FC } from 'react';
import {
  Risks,
  ThreatType,
  SelectorGroup,
  Rule,
  Task,
} from '../../adapters/task/task';
import { TaskStatus } from '../../adapters/task/task-status';
import ClaimButton from './claim-button';
import TaskAssignee from './task-assignee';
import UnclaimButton from './unclaim-button';

class Props {
  task: Task;
  risks: Risks;
  onTaskClaimed: (task: Task) => void;
  onTaskUnclaimed: (task: Task) => void;
}

function toHighestThreatLevelValue(risks: Risks): string {
  const threatLevel = risks.highestThreatLevel;
  const value = threatLevel.value;
  if (threatLevel.type === ThreatType.Selector) {
    return `Category ${value}`;
  }
  return value;
}

function toThreatTypes(risks: Risks): string[] {
  const threatTypes: string[] = [];
  risks.matchedSelectorGroups.groups.map(function (group: SelectorGroup) {
    threatTypes.push(group.threatType);
  });
  risks.matchedRules.map(function (rule: Rule) {
    rule.abuseTypes.map(function (abuseType: string) {
      threatTypes.push(abuseType);
    });
  });
  const uniqueThreatTypes = [...new Set(threatTypes)];
  return uniqueThreatTypes;
}

function formatThreatTypes(threatTypes: string[]): string {
  if (threatTypes.length < 1) {
    return 'None';
  }
  const firstType = threatTypes[0];
  if (threatTypes.length === 1) {
    return firstType;
  }
  const isPlural = threatTypes.length > 1;
  const suffix = isPlural ? 'rules' : 'rule';
  return `${firstType} and ${threatTypes.length - 1} other ${suffix}`;
}

const shouldShowClaimButton = (task: Task): boolean => {
  return task.status === TaskStatus.New;
};

const shouldShowAssignee = (task: Task): boolean => {
  if (task.assignee) {
    return true;
  }
  return false;
};

const shouldShowUnclaimButton = (task: Task): boolean => {
  if (task.assignee) {
    return task.status === TaskStatus.InProgress;
  }
  return false;
};

const TaskListCardTitleSection: FC<Props> = ({
  task,
  risks,
  onTaskClaimed,
  onTaskUnclaimed,
}) => {
  return (
    <section>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <div className="task-title-container govuk-!-padding-top-2 govuk-!-padding-left-2">
            <h4 className="govuk-heading-s task-heading">{task.id}</h4>
          </div>
          <div className="govuk-grid-column govuk-!-padding-left-2">
            <h4 className="govuk-heading-s task-highest-risk govuk-!-margin-bottom-0">
              <span className="govuk-tag govuk-tag--riskTier">
                {toHighestThreatLevelValue(risks)}
              </span>
              <span className="govuk-body task-risk-statement">
                {formatThreatTypes(toThreatTypes(risks))}
              </span>
            </h4>
          </div>
        </div>
        <div className="govuk-grid-column-one-third govuk-!-padding-top-2 govuk-!-padding-right-3">
          {shouldShowClaimButton(task) && (
            <div className="claim-button-container">
              <ClaimButton task={task} onTaskClaimed={onTaskClaimed} />
            </div>
          )}
          <div className="claim-button-container">
            {shouldShowAssignee(task) && <TaskAssignee task={task} />}
            {shouldShowUnclaimButton(task) && (
              <UnclaimButton task={task} onTaskUnclaimed={onTaskUnclaimed} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskListCardTitleSection;
