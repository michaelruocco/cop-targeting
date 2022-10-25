import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { SelectorGroup, SelectorGroups } from '../../adapters/task/task';
import { Accordion, AccordionItem } from '@ukhomeoffice/cop-react-components';
import * as pluralise from 'pluralize';

import '../../styles/task-detail-page.scss';

class Props {
  selectorGroups: SelectorGroups;
}

const TaskDetailSelectorGroups: FC<Props> = ({ selectorGroups }) => {
  const toHeader = (groups: SelectorGroups) => {
    if (groups.totalNumberOfSelectors < 1) {
      return null;
    }
    return (
      <div style={{ paddingRight: '40px' }}>
        <div key="selector-groups-header" className="govuk-risks-grid">
          <div className="govuk-grid-column-one-third">
            <span className="govuk-!-font-weight-bold">Group Reference</span>
          </div>
          <div className="govuk-grid-column-one-third">
            <span className="govuk-!-font-weight-bold">Threat Category</span>
          </div>
          <div className="govuk-grid-column-one-third">
            <span className="govuk-!-font-weight-bold">Threat Type</span>
          </div>
        </div>
      </div>
    );
  };

  const toSelectorGroupRow = (group: SelectorGroup, index: number) => {
    const key = `selector-group-row-${index}`;
    return (
      <div key={key} className="govuk-risks-grid">
        <div className="govuk-grid-column-one-third">
          {group.groupReference}
        </div>
        <div className="govuk-grid-column-one-third">
          <span
            className="govuk-tag govuk-tag--riskTier"
            style={{ marginBottom: '0px' }}
          >
            Category {group.category}
          </span>
        </div>
        <div className="govuk-grid-column-one-third">{group.threatType}</div>
      </div>
    );
  };

  const toSelectorGroupRowAccordion = (group: SelectorGroup, index: number) => {
    const key = `selector-group-row-${index}`;
    return (
      <AccordionItem
        key={key}
        heading={null}
        summary={toSelectorGroupRow(group, index)}
        expanded={false}
      >
        <div className="govuk-risks-grid">
          <div className="govuk-grid-column-one-third">
            <span className="govuk-!-font-weight-bold">Description</span>
          </div>
          <div className="govuk-grid-column-one-third">
            <span className="govuk-!-font-weight-bold">Agency</span>
          </div>
          <div className="govuk-grid-column-one-third">
            <span className="govuk-!-font-weight-bold">Rule Version</span>
          </div>
        </div>
        <div className="govuk-risks-grid" style={{ marginBottom: '10px' }}>
          <div className="govuk-grid-column-one-third">
            This text would provide more detail on the rule than can be given in
            the name, along with some rationale
          </div>
          <div className="govuk-grid-column-one-third">NBTC</div>
          <div className="govuk-grid-column-one-third">36</div>
        </div>
        <div className="govuk-risks-grid">
          <div className="govuk-grid-column-one-third">
            <span className="govuk-!-font-weight-bold">Risk Indicators</span>
          </div>
        </div>
        <div className="govuk-risks-grid">
          <ol>
            <li>Flight number is AF1234</li>
            <li>Mode is Air passenger</li>
          </ol>
        </div>
      </AccordionItem>
    );
  };

  const toGroupRows = (groups: SelectorGroups) => {
    return groups.groups.map((group, index) =>
      toSelectorGroupRowAccordion(group, index),
    );
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
            {pluralise(
              'selectors',
              selectorGroups.totalNumberOfSelectors,
              true,
            )}{' '}
            matched ({pluralise('groups', selectorGroups.groups.length, true)})
          </span>
        </div>
      </div>
      {toHeader(selectorGroups)}
      <Accordion id="selector-group-accordion" classModifiers="risks">
        {toGroupRows(selectorGroups)}
      </Accordion>
    </div>
  );
};

export default TaskDetailSelectorGroups;
