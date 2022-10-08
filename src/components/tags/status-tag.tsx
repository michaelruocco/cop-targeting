import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { Tag } from '@ukhomeoffice/cop-react-components';
import { TaskStatus, formatTaskStatus } from '../../adapters/task/task-status';

import '../../styles/task-detail-page.scss';

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
