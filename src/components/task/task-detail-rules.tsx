import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { Rule } from '../../adapters/task/task';
import * as pluralise from 'pluralize';

import '../../styles/task-detail-page.scss';

class Props {
  rules: Rule[];
}

const TaskDetailRules: FC<Props> = ({ rules }) => {
  const toRuleHeader = (rules: Rule[]) => {
    if (rules.length < 1) {
      return null;
    }
    return (
      <div
        className="govuk-task-details-grid"
        style={{ padding: '5px', marginBottom: '0px' }}
      >
        <div className="govuk-grid-column-one-third">
          <span className="govuk-!-font-weight-bold">Rule Name</span>
        </div>
        <div className="govuk-grid-column-one-third">
          <span className="govuk-!-font-weight-bold">Priority</span>
        </div>
        <div className="govuk-grid-column-one-third">
          <span className="govuk-!-font-weight-bold">Abuse Type</span>
        </div>
      </div>
    );
  };

  const toRuleRow = (rule: Rule) => {
    const key = `rule-${rule.id}`;
    return (
      <div
        key={key}
        className="govuk-task-details-grid"
        style={{ padding: '5px', marginBottom: '0px' }}
      >
        <div className="govuk-grid-column-one-third">{rule.name}</div>
        <div className="govuk-grid-column-one-third">
          <span
            className="govuk-tag govuk-tag--riskTier"
            style={{ marginBottom: '0px' }}
          >
            {rule.priority}
          </span>
        </div>
        <div className="govuk-grid-column-one-third">{rule.abuseTypes}</div>
      </div>
    );
  };

  const toRuleRows = (rules: Rule[]) => {
    return rules.map((rule) => toRuleRow(rule));
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <div
        key="targeting-indicators-header"
        className="govuk-grid-row grid-background--greyed"
        style={{ marginBottom: '10px', paddingBottom: '10px' }}
      >
        <div className="govuk-grid-column-one-third">
          <span className="govuk-!-font-weight-bold">
            {pluralise('rules', rules.length, true)} matched
          </span>
        </div>
      </div>
      {toRuleHeader(rules)}
      {toRuleRows(rules)}
    </div>
  );
};

export default TaskDetailRules;
