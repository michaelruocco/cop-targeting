import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { Rule } from '../../../../adapters/task/task';
import { Accordion, AccordionItem } from '@ukhomeoffice/cop-react-components';
import * as pluralise from 'pluralize';

class Props {
  rules: Rule[];
}

const TaskDetailRules: FC<Props> = ({ rules }) => {
  const toRuleHeader = (rules: Rule[]) => {
    if (rules.length < 1) {
      return null;
    }
    return (
      <div className="govuk-risks-grid govuk-risks-grid--header">
        <div className="govuk-risks-grid-column">
          <span className="govuk-!-font-weight-bold">Rule Name</span>
        </div>
        <div className="govuk-risks-grid-column">
          <span className="govuk-!-font-weight-bold">Priority</span>
        </div>
        <div className="govuk-risks-grid-column">
          <span className="govuk-!-font-weight-bold">Threat Type</span>
        </div>
      </div>
    );
  };

  const toRuleRowAccordion = (rule: Rule) => {
    const key = `rule-${rule.id}-detail`;
    return (
      <AccordionItem
        key={key}
        heading={null}
        summary={toRuleRow(rule)}
        expanded={false}
      >
        <div className="govuk-rule-grid-detail">
          <div>
            <span className="govuk-!-font-weight-bold">Description</span>
          </div>
          <div>
            <span className="govuk-!-font-weight-bold">Agency</span>
          </div>
          <div>
            <span className="govuk-!-font-weight-bold">Rule Version</span>
          </div>
        </div>
        <div className="govuk-rule-grid-detail">
          <div>{rule.description}</div>
          <div>NBTC</div>
          <div>{rule.version}</div>
        </div>
        <div className="govuk-rule-grid-detail govuk-rule-grid-detail--risk-indicators">
          <div>
            <span className="govuk-!-font-weight-bold">Risk Indicators</span>
          </div>
        </div>
        <div className="govuk-rule-grid-detail">
          <ol className="risk-indicators">
            <li>Flight number is AF1234</li>
            <li>Mode is Air passenger</li>
          </ol>
        </div>
      </AccordionItem>
    );
  };

  const toRuleRow = (rule: Rule) => {
    const key = `rule-${rule.id}-accordion`;
    return (
      <div key={key} className="govuk-risks-grid">
        <div className="govuk-risks-grid-column">{rule.name}</div>
        <div className="govuk-risks-grid-column">
          <span className="govuk-tag govuk-tag--risk">{rule.priority}</span>
        </div>
        <div className="govuk-risks-grid-column">{rule.abuseTypes}</div>
      </div>
    );
  };

  const toRuleRows = (rules: Rule[]) => {
    if (rules.length < 1) {
      return null;
    }
    return (
      <div className="govuk-!-margin-top-10">
        {rules.map((rule) => toRuleRowAccordion(rule))}
      </div>
    );
  };

  return (
    <>
      <div
        key="targeting-indicators-header"
        className="govuk-risks-header-grid-row grid-background--greyed"
      >
        <div className="govuk-grid-column-one-third">
          <span className="govuk-!-font-weight-bold">
            {pluralise('rules', rules.length, true)} matched
          </span>
        </div>
      </div>
      {rules.length > 0 && (
        <>
          {toRuleHeader(rules)}
          <Accordion id="selector-group-accordion" classModifiers="risks">
            {toRuleRows(rules)}
          </Accordion>
        </>
      )}
    </>
  );
};

export default TaskDetailRules;
