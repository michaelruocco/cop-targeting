import * as React from 'react';
import { FC } from 'react';
import {
  Risks,
  ThreatType,
  SelectorGroup,
  Rule,
  Task,
} from '../../adapters/task/task';
import { isNew, isAssigned } from '../../adapters/task/task';
import ClaimButton from './claim-button';
import TaskListAssignee from './task-list-assignee';
import UnclaimButton from './unclaim-button';

class Props {
  task: Task;
  risks: Risks;
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
  const isPlural = threatTypes.length > 2;
  const suffix = isPlural ? 'rules' : 'rule';
  return `${firstType} and ${threatTypes.length - 1} other ${suffix}`;
}

const TaskListCardTitleSection: FC<Props> = ({
  task,
  risks,
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
          {isNew(task) && (
            <div className="claim-button-container">
              <ClaimButton task={task} />
            </div>
          )}
          <div className="claim-button-container">
            {isAssigned(task) && (
              <>
                <TaskListAssignee task={task} />
                <UnclaimButton task={task} onTaskUnclaimed={onTaskUnclaimed} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskListCardTitleSection;
