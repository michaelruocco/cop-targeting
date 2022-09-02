import * as React from 'react';
import { FC } from 'react';
import {
  formatDocumentCountryOfIssue,
  formatDocumentNumber,
  formatDocumentValidFrom,
  formatDocumentExpiry,
} from '../../adapters/task/person';
import { Movement } from '../../adapters/task/task';

class Props {
  movement: Movement;
}

const TaskListCardDocumentItem: FC<Props> = ({ movement }) => {
  const person = movement.person;
  const document = person?.document;
  return (
    <div>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        Document
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-bold">
          {formatDocumentNumber(document)} (
          {formatDocumentCountryOfIssue(document)})
        </li>
      </ul>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
        <li className="govuk-!-font-weight-regular">
          Valid from {formatDocumentValidFrom(document)}
        </li>
      </ul>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
        <li className="govuk-!-font-weight-regular">
          Expires {formatDocumentExpiry(document)}
        </li>
      </ul>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
        <li className="govuk-!-font-weight-regular">
          Issued by {formatDocumentCountryOfIssue(document)}
        </li>
      </ul>
    </div>
  );
};

export default TaskListCardDocumentItem;
