import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { SelectorGroup, SelectorGroups } from '../../adapters/task/task';

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
      <div
        className="govuk-task-details-grid"
        style={{ padding: '5px', marginBottom: '0px' }}
      >
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
    );
  };

  const toSelectorGroupRow = (group: SelectorGroup) => {
    return (
      <div
        className="govuk-task-details-grid"
        style={{ padding: '5px', marginBottom: '0px' }}
      >
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

  const toGroupRows = (groups: SelectorGroups) => {
    return groups.groups.map((group) => toSelectorGroupRow(group));
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
            {selectorGroups.totalNumberOfSelectors} selectors matched (
            {selectorGroups.groups.length} groups)
          </span>
        </div>
      </div>
      {toHeader(selectorGroups)}
      {toGroupRows(selectorGroups)}
    </div>
  );
};

export default TaskDetailSelectorGroups;
