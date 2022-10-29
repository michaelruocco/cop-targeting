import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { Tag } from '@ukhomeoffice/cop-react-components';
import { TaskStatus, formatTaskStatus } from '../../adapters/task/task-status';

class Props {
  status: TaskStatus;
}

const StatusTag: FC<Props> = ({ status }) => {
  return (
    <Tag
      className="govuk-tag govuk-tag--newTarget"
      text={formatTaskStatus(status)}
    />
  );
};

export default StatusTag;
