import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { SelectorGroup, SelectorGroups } from '../../../../adapters/task/task';
import { Accordion, AccordionItem } from '@ukhomeoffice/cop-react-components';
import * as pluralise from 'pluralize';

class Props {
  selectorGroups: SelectorGroups;
}

const TaskDetailSelectorGroups: FC<Props> = ({ selectorGroups }) => {
  const toHeader = (groups: SelectorGroups) => {
    if (groups.totalNumberOfSelectors < 1) {
      return null;
    }
    return (
      <div>
        <div
          key="selector-groups-header"
          className="govuk-risks-grid govuk-risks-grid--header"
        >
          <div className="govuk-risks-grid-column">
            <span className="govuk-!-font-weight-bold">Group Reference</span>
          </div>
          <div className="govuk-risks-grid-column">
            <span className="govuk-!-font-weight-bold">Threat Category</span>
          </div>
          <div className="govuk-risks-grid-column">
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
        <div className="govuk-risks-grid-column">{group.groupReference}</div>
        <div className="govuk-risks-grid-column">
          <span className="govuk-tag govuk-tag--risk">
            Category {group.category}
          </span>
        </div>
        <div className="govuk-risks-grid-column">{group.threatType}</div>
      </div>
    );
  };

  const toSelectorGroupRowAccordion = (group: SelectorGroup, index: number) => {
    const key = `selector-group-row-${index}-accordion`;
    return (
      <AccordionItem
        key={key}
        heading={null}
        summary={toSelectorGroupRow(group, index)}
        expanded={false}
      >
        Selector details will go here
      </AccordionItem>
    );
  };

  const toGroupRows = (groups: SelectorGroups) => {
    return groups.groups.map((group, index) =>
      toSelectorGroupRowAccordion(group, index),
    );
  };

  const toHeaderText = (selectorGroups: SelectorGroups): string => {
    const selectorsText = pluralise(
      'selectors',
      selectorGroups.totalNumberOfSelectors,
      true,
    );
    if (selectorGroups.totalNumberOfSelectors < 1) {
      return `${selectorsText} matched`;
    }
    return `${selectorsText} matched from ${pluralise(
      'groups',
      selectorGroups.groups.length,
      true,
    )}`;
  };

  return (
    <>
      <div
        key="targeting-indicators-header"
        className="govuk-risks-header-grid-row grid-background--greyed"
      >
        <div className="govuk-grid-column-one-third">
          <span className="govuk-!-font-weight-bold">
            {toHeaderText(selectorGroups)}
          </span>
        </div>
      </div>
      {toHeader(selectorGroups)}
      <Accordion id="selector-group-accordion" classModifiers="risks">
        {toGroupRows(selectorGroups)}
      </Accordion>
    </>
  );
};

export default TaskDetailSelectorGroups;
