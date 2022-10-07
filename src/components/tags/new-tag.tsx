import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { Tag } from '@ukhomeoffice/cop-react-components';
import { TaskStatus } from '../../adapters/task/task-status';

import '../../styles/task-detail-page.scss';

const NewTag: FC = () => {
  return (
    <Tag className="govuk-tag govuk-tag--newTarget" text={TaskStatus.New} />
  );
};

export default NewTag;
