import * as React from 'react';
import { FC } from 'react';

class Props {
  text: string;
}

const TaskListHeader: FC<Props> = ({ text }) => {
  return (
    <div className="heading-container govuk-!-margin-bottom-8">
      <h1 className="govuk-heading-xl govuk-!-margin-bottom-0 govuk-!-padding-right-1">
        {text}
      </h1>
    </div>
  );
};

export default TaskListHeader;
